
Open-source (MIT) software framework  
Rust, JavaScript  
Desktop/mobile apps with web frontend  
Compatible across macOS, Linux, Windows, iOS, Android  
https://tauri.app/  

Tauri uses a lightweight WebView (!) not a full Chromium engine

### Security
Internal audit on minor release  
External audit on major release  
Don't need to push an update for every Chromium n-day  

**Tao**: cross-platform application window creation and event loop management library  
**Wry**: cross-platform WebView rendering library  

Tauri prereq's: https://v2.tauri.app/start/prerequisites/

An example Windows flow:
- [Microsoft C++ Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/)
- Install [[Rust]]
- `cargo install create-tauri-app --locked`
- `cargo create-tauri-app appname`
- `cargo install tauri-cli --version '^2.0.0' --locked`
- `cd .\appname\`
- `cargo tauri dev`

`npm run tauri dev`  
`npm run tauri build`  
`src-tauri\target\release\bundle\nsis\appname_0.1.0_x64-setup.exe`  
`C:\Users\username\AppData\Local\appname`  
