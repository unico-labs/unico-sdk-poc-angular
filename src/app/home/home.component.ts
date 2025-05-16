import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="home">
      <section class="hero">
        <h1>SDK Unico Angular</h1>
        <p>Experience fast and secure biometric capture with advanced technology that ensures accurate identity verification.</p>
        <a routerLink="/capture" class="cta-button">Start Capture</a>
      </section>

      <section class="features">
        <div class="feature-card">
          <div class="feature-icon">🎥</div>
          <h3>Face Recognition</h3>
          <p>Advanced camera technology for precise facial recognition and authentication.</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">🔒</div>
          <h3>Liveness Detection</h3>
          <p>Ensure the person is physically present with sophisticated liveness checks.</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">🛡️</div>
          <h3>Secure Processing</h3>
          <p>All data is encrypted and processed following the highest security standards.</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">📄</div>
          <h3>ID Verification</h3>
          <p>Capture and verify official documents with precision and accuracy.</p>
        </div>
      </section>

      <section class="why-us">
        <div class="content">
          <div class="info">
            <h2>Why Choose Our Solution?</h2>
            <p>Our biometric capture technology provides industry-leading accuracy while maintaining the highest privacy standards.</p>
            <ul class="benefits">
              <li>Fast and accurate capture process</li>
              <li>Multiple verification methods</li>
              <li>Seamless integration options</li>
              <li>Enterprise-grade security</li>
            </ul>
          </div>
          <div class="demo-card">
            <div class="demo-image">
              <span class="demo-icon">📸</span>
            </div>
            <h3>Start in seconds</h3>
            <p>Begin capturing biometric data with just a few clicks.</p>
            <a routerLink="/capture" class="try-button">Try Now</a>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .home {
      padding: 2rem 0;
    }

    .hero {
      text-align: center;
      max-width: 800px;
      margin: 0 auto 4rem;
      padding: 0 1rem;
    }

    .hero h1 {
      font-size: 3rem;
      color: #0384fc;
      margin-bottom: 1.5rem;
      font-weight: bold;
    }

    .hero p {
      font-size: 1.25rem;
      color: #64748b;
      margin-bottom: 2rem;
    }

    .cta-button {
      display: inline-block;
      background: #0384fc;
      color: white;
      padding: 1rem 2rem;
      border-radius: 8px;
      font-weight: 500;
      text-decoration: none;
      transition: transform 0.2s, background-color 0.2s;
    }

    .cta-button:hover {
      background: #0369c8;
      transform: translateY(-2px);
    }

    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto 4rem;
      padding: 0 1rem;
    }

    .feature-card {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      text-align: center;
      transition: transform 0.3s;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .feature-card:hover {
      transform: translateY(-5px);
    }

    .feature-icon {
      width: 56px;
      height: 56px;
      background: #0384fc;
      border-radius: 50%;
      margin: 0 auto 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      color: white;
    }

    .feature-card h3 {
      color: #334155;
      font-size: 1.25rem;
      margin-bottom: 1rem;
      font-weight: 600;
    }

    .feature-card p {
      color: #64748b;
      line-height: 1.6;
    }

    .why-us {
      background: #f8fafc;
      padding: 4rem 1rem;
      margin-bottom: 4rem;
    }

    .content {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }

    .info h2 {
      font-size: 2rem;
      color: #334155;
      margin-bottom: 1.5rem;
      font-weight: bold;
    }

    .info p {
      color: #64748b;
      margin-bottom: 2rem;
      font-size: 1.125rem;
      line-height: 1.6;
    }

    .benefits {
      list-style: none;
      padding: 0;
    }

    .benefits li {
      color: #64748b;
      margin-bottom: 1rem;
      padding-left: 2rem;
      position: relative;
    }

    .benefits li::before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 1rem;
      height: 1rem;
      background: #0384fc;
      border-radius: 50%;
      opacity: 0.2;
    }

    .demo-card {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .demo-image {
      background: linear-gradient(to right, #0384fc, #0369c8);
      height: 200px;
      border-radius: 8px;
      margin-bottom: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .demo-icon {
      font-size: 64px;
    }

    .demo-card h3 {
      font-size: 1.5rem;
      color: #334155;
      margin-bottom: 1rem;
      font-weight: 600;
    }

    .demo-card p {
      color: #64748b;
      margin-bottom: 1.5rem;
    }

    .try-button {
      display: block;
      background: #0384fc;
      color: white;
      padding: 1rem;
      border-radius: 8px;
      text-align: center;
      text-decoration: none;
      font-weight: 500;
      transition: background-color 0.2s;
    }

    .try-button:hover {
      background: #0369c8;
    }

    @media (max-width: 768px) {
      .hero h1 {
        font-size: 2.5rem;
      }

      .content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .features {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class HomeComponent {}