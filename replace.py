import sys
import re

path = r'c:\ANTIgravity\car detailing version2\king detiling\src\App.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

old_block = '''          <div className="md:w-2/3 overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-16 z-10" style={{ background: 'linear-gradient(to right, #0A0A0A, transparent)' }} />
            <div className="absolute right-0 top-0 bottom-0 w-16 z-10" style={{ background: 'linear-gradient(to left, #0A0A0A, transparent)' }} />
            <motion.div
              className="flex items-center gap-12"
              animate={{ x: ["0%", "-33.33%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
            >
              {doubledLogos.map((logo, i) => (
                <div key={i} className="shrink-0">
                  {logo.svg}
                </div>
              ))}
            </motion.div>
          </div>'''

new_block = '''          <div className="md:w-2/3 flex justify-center md:justify-end">
            <div className="w-full max-w-[320px] md:max-w-[420px] overflow-hidden relative" style={{ maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)' }}>
              <motion.div
                className="flex items-center gap-12 w-fit"
                animate={{ x: ["0%", "-33.33%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
              >
                {doubledLogos.map((logo, i) => (
                  <div key={i} className="flex flex-col items-center justify-center shrink-0 opacity-80 transition-opacity hover:opacity-100" style={{ minWidth: '100px' }}>
                    {logo.svg}
                    <span className="mt-3 text-[10px] font-mono uppercase tracking-[0.2em] text-white">{logo.name}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>'''

old_regex = re.compile(re.escape(old_block).replace(r'\n', r'\r?\n'))
if old_regex.search(content):
    content = old_regex.sub(new_block.replace('\n', '\n'), content, count=1)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print('Replaced successfully.')
else:
    print('Pattern not found. Printing context around line 700:')
    lines = content.split('\n')
    for i in range(695, 715):
        if i < len(lines):
            print(repr(lines[i]))
