import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'ar-vision',
  styleUrl: 'ar-vision.css',
  shadow: true
})
export class ARVision {
  @State() scanning: boolean = false;

  startAR() {
    this.scanning = true;
    setTimeout(() => {
      this.scanning = false;
    }, 3000);
  }

  render() {
    return (
      <div class="ar-container">
        <h2>AI-Powered AR Vision</h2>
        <button onClick={() => this.startAR()}>{this.scanning ? 'Scanning...' : 'Start AR Scan'}</button>
        <p>{this.scanning ? 'Detecting Objects...' : 'Ready for Augmented Reality'}</p>
      </div>
    );
  }
}
