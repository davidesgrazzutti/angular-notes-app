import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Note } from '../../models/note.model';

@Component({
  selector: 'app-note-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './note-form.html',
  styleUrls: ['./note-form.css']
})
export class NoteFormComponent {
  title = '';
  content = '';
  category = '';

  @Output() addNote = new EventEmitter<Note>();

  onSubmit() {
    if (!this.title.trim() || !this.content.trim()) return;

    const newNote: Note = {
      id: Date.now().toString(),
      title: this.title,
      content: this.content,
      category: this.category,
      order: 0 // verrà aggiornato nella lista
    };

    this.addNote.emit(newNote);

    this.title = '';
    this.content = '';
    this.category = '';
  }
}
