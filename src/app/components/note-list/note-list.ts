import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../../models/note.model';
import { NoteItemComponent } from '../note-item/note-item';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [CommonModule, FormsModule, NoteItemComponent],
  templateUrl: './note-list.html',
  styleUrls: ['./note-list.css']
})
export class NoteListComponent {
  @Input() notes: Note[] = [];
  @Output() deleteNote = new EventEmitter<string>();
  @Output() updateNote = new EventEmitter<Note>();
}
