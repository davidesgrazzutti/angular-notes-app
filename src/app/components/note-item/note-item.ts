import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../../models/note.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // 👈 aggiungi


@Component({
  selector: 'app-note-item',
  standalone: true,
  imports: [CommonModule, FormsModule], // 👈 FormsModule qui
  templateUrl: './note-item.html',
  styleUrls: ['./note-item.css']
})
export class NoteItemComponent {
  @Input() note!: Note;
  @Output() deleteNote = new EventEmitter<string>();
  @Output() updateNote = new EventEmitter<Note>();

  isEditing = false;
  editTitle = '';
  editContent = '';
  editCategory = '';

  startEdit() {
    this.isEditing = true;
    this.editTitle = this.note.title;
    this.editContent = this.note.content;
    this.editCategory = this.note.category || '';
  }

  saveEdit() {
    if (!this.editTitle.trim() || !this.editContent.trim()) return;
    this.updateNote.emit({
      ...this.note,
      title: this.editTitle,
      content: this.editContent,
      category: this.editCategory
    });
    this.isEditing = false;
  }

  cancelEdit() {
    this.isEditing = false;
  }
}
