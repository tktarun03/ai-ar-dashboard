import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>AI-Enhanced AR Dashboard</h1>
    <div class="dashboard">
      <ar-vision></ar-vision>
      <wasm-ai-assistant></wasm-ai-assistant>
    </div>
  `,
  styles: ['.dashboard { display: flex; gap: 20px; justify-content: center; padding: 20px; }']
})
export class AppComponent { }