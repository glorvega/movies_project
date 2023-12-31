import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-dark text-center text-white position-relative bottom-0">
    <div class="container p-4 pb-0">
      <!-- Section: Social media -->
      <section>
        <!-- Facebook -->
        <a class="btn btn-floating m-1" href="#!" role="button">
        <img src="../../../assets/images/icons/facebook.png" alt="facebook" width="50px" height="50px"/>  
        </a>
  
        <!-- Twitter -->
        <a class="btn btn-floating m-1" href="#!" role="button">
          <img src="../../../assets/images/icons/twitter.png" alt="twitter" width="50px" height="50px"/>  
          </a>
  
        <!-- Youtube -->
        <a class="btn btn-floating m-1" href="#!" role="button">
          <img src="../../../assets/images/icons/youtube.png" alt="facebook" width="50px" height="50px"/>  
          </a>

        <!-- Pinterest -->
        <a class="btn btn-floating m-1" href="#!" role="button">
          <img src="../../../assets/images/icons/pinterest.png" alt="facebook" width="50px" height="50px"/>  
          </a>

        <!-- Spotify -->
        <a class="btn btn-floating m-1" href="#!" role="button">
          <img src="../../../assets/images/icons/spotify.png" alt="facebook" width="50px" height="50px"/>  
          </a>
      </section>
    </div>
  </footer>
  `,
})
export class FooterComponent {

}
