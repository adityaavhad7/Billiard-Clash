export function renderCredits(root: HTMLElement, onBack: () => void): void {
  root.innerHTML = `
    <div class="menu-screen screen-enter">
      <button class="back-link" id="back">&larr; Main Menu</button>
      <div class="panel menu-panel menu-panel--wide">
        <h2>ABOUT &amp; CREDITS</h2>
        <div class="credits-content">
          <h3 class="credits-game-name">Billiard Clash <span class="credits-subtitle-tag">— AI-Powered 8-Ball Pool</span></h3>
          <p class="credits-lead">A modern 8-ball pool experience combining realistic physics, intelligent AI opponents, and competitive multiplayer gameplay.</p>

          <div class="credits-section">
            <h4 class="credits-heading">Core Architecture</h4>
            <p>Built with <strong>TypeScript · HTML5 Canvas · Node.js · Express · Socket.IO</strong>, featuring physics-based ball movement, real-time multiplayer networking, and responsive game controls.</p>
          </div>

          <div class="credits-section">
            <h4 class="credits-heading">AI &amp; Smart Features</h4>
            <ul class="credits-feature-list">
              <li><strong>AI Opponents:</strong> Play against computer-controlled opponents that evaluate shots and select moves.</li>
              <li><strong>Intelligent Shot Analysis:</strong> Estimate shot angles, target balls, and possible pocket outcomes.</li>
              <li><strong>Smart Gameplay Assistance:</strong> Offer aiming guidance and shot suggestions to help players improve.</li>
              <li><strong>Adaptive Difficulty:</strong> Provide different AI skill levels (Easy, Medium, Hard, and Insane).</li>
            </ul>
          </div>

          <div class="credits-section">
            <h4 class="credits-heading">Rules &amp; Sound</h4>
            <p>Game rules are based on the <strong>WPA (World Pool-Billiard Association) 8-Ball ruleset</strong>.</p>
            <p>Sound effects are generated at runtime using the <strong>Web Audio API</strong>, with no third-party audio assets required.</p>
          </div>

          <div class="credits-divider"></div>

          <div class="credits-badge-card">
            <p class="credits-signature">Designed and Developed by <span class="credits-author">ADITYA AVHAD</span></p>
            <p class="credits-copyright">&copy; 2026 ADITYA AVHAD</p>
            <p class="credits-tagline">Aim. Break. Outsmart. Win.</p>
          </div>
        </div>
      </div>
    </div>
  `;
  root.querySelector('#back')!.addEventListener('click', onBack);
}
