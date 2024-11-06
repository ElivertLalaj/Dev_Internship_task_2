import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-timed-cache',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './timed-cache.component.html',
  styleUrl: './timed-cache.component.css'
})
export class TimedCacheComponent {
  private store: Map<number, { value: number; expiresAt: number }> = new Map();
  key = 0;
  value = 0;
  duration = 1000;
  getResult: number | string = '';
  countResult: number | string = '';

  onSet() {
    const now = Date.now();
    const existsAndUnexpired = this.store.has(this.key) && this.store.get(this.key)!.expiresAt > now;

    this.store.set(this.key, { value: this.value, expiresAt: now + this.duration });
    
    if (existsAndUnexpired) {
      alert('Updated existing key with new value and duration.');
    } else {
      alert('Added new key-value pair.');
    }
  }

  onGet() {
    const now = Date.now();
    const entry = this.store.get(this.key);

    if (entry && entry.expiresAt > now) {
      this.getResult = `Value: ${entry.value}`;
    } else {
      this.store.delete(this.key); 
      this.getResult = 'Key expired or does not exist.';
    }
  }

  onCount() {
    const now = Date.now();
    let unexpiredCount = 0;

    for (const [key, entry] of this.store) {
      if (entry.expiresAt > now) {
        unexpiredCount++;
      } else {
        this.store.delete(key); 
      }
    }

    this.countResult = `Count of unexpired keys: ${unexpiredCount}`;
  }
}
