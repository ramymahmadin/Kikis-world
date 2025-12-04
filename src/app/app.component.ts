import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Define the list of romantic texts
  private readonly quotes = [
    "You are my sun, my moon, and all my stars.",
    "If I know what love is, it is because of you.",
    "I look at you and see the rest of my life in front of my eyes.",
    "You are the finest, loveliest, tenderest person I have ever known.",
    "My heart is and always will be yours.",
    "Every love story is beautiful, but ours is my favorite.",
    "I fell in love with the way you touched me without using your hands.",
    "In a sea of people, my eyes will always search for you.",
    "Your voice is my favorite sound.",
    "To the world you may be one person, but to one person you are the world."
  ];

  // State Signals
  private index = signal<number>(0);
  protected isFading = signal<boolean>(false);

  // Computed Signal: Updates automatically when index changes
  protected currentQuote = computed(() => this.quotes[this.index()]);

  constructor() {
    this.randomize();
  }

  protected generateNewQuote() {
    // Start animation
    this.isFading.set(true);

    // Wait for fade-out (500ms), then swap text and fade-in
    // In Zoneless, standard setTimeout works perfectly
    setTimeout(() => {
      this.randomize();
      this.isFading.set(false);
    }, 500);
  }

  private randomize() {
    let newIndex;
    // Logic to prevent the same quote appearing twice in a row
    do {
      newIndex = Math.floor(Math.random() * this.quotes.length);
    } while (newIndex === this.index() && this.quotes.length > 1);
    
    this.index.set(newIndex);
  }
}