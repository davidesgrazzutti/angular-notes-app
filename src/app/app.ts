import { Component } from '@angular/core';
import { NoteFormComponent } from './components/note-form/note-form';
import { NoteListComponent } from './components/note-list/note-list';
import { Note } from './models/note.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NoteFormComponent, NoteListComponent],
  templateUrl: './app.html'
})
export class AppComponent {
  notes: Note[] = [];

  addNote(note: Note) {
    note.order = this.notes.length;
    this.notes.push(note);
  }

  deleteNote(id: string) {
    this.notes = this.notes.filter(n => n.id !== id)
      .map((n, i) => ({ ...n, order: i }));
  }

  updateNote(note: Note) {
    this.notes = this.notes.map(n => n.id === note.id ? note : n);
  }
}
