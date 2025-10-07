/*
  Cleans version-suffixed import specifiers like:
  - "@radix-ui/react-label@2.1.2" -> "@radix-ui/react-label"
  - "lucide-react@0.487.0" -> "lucide-react"
  Also fixes previously mangled forms like "@radix-ui/react-label2.1.2" -> "@radix-ui/react-label".
*/
const fs = require('fs');
const path = require('path');

const ROOT = path.join(process.cwd(), 'src');

/**
 * Perform targeted replacements on a file's contents.
 */
function cleanImports(source) {
  let s = source;

  // 1) Exact packages with @version suffix inside quotes
  // from "module@1.2.3" -> from "module"
  s = s.replace(/(from\s+["\'])([^"']+?)(@[0-9][^"']*)(["\'])/g, (_m, p1, mod, _ver, p4) => `${p1}${mod}${p4}`);
  // import X from 'module@1.2.3' -> import X from 'module'
  s = s.replace(/(import\s+[\{\*\w\s,]+\s+from\s+["\'])([^"']+?)(@[0-9][^"']*)(["\'])/g, (_m, p1, mod, _ver, p4) => `${p1}${mod}${p4}`);

  // 2) Target known libs and strip any trailing version-like tail (including cases without '@')
  const libs = [
    '@radix-ui/react-[a-z-]+' ,
    'lucide-react',
    'class-variance-authority',
    'react-day-picker',
    'recharts',
    'cmdk',
    'vaul',
    'react-hook-form',
    'input-otp',
    'react-resizable-panels',
    'next-themes',
    'sonner',
  ];
  for (const lib of libs) {
    const reAt = new RegExp(`(["\'](${lib}))@[0-9][^"']*(["\'])`, 'g');
    s = s.replace(reAt, (_m, _p0, pkg, q) => `${q}${pkg}${q}`);
    const reNoAt = new RegExp(`(["\'](${lib}))[0-9][0-9\.]*[^"']*(["\'])`, 'g');
    s = s.replace(reNoAt, (_m, _p0, pkg, q) => `${q}${pkg}${q}`);
  }

  return s;
}

function processFile(filePath) {
  const before = fs.readFileSync(filePath, 'utf8');
  const after = cleanImports(before);
  if (after !== before) {
    fs.writeFileSync(filePath, after);
    console.log('fixed', path.relative(process.cwd(), filePath));
  }
}

function walk(dirPath) {
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const full = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else if (/\.(ts|tsx)$/.test(entry.name)) {
      processFile(full);
    }
  }
}

if (fs.existsSync(ROOT)) {
  walk(ROOT);
} else {
  console.error('No src directory found at', ROOT);
  process.exit(1);
}


