import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

@Component({
  selector: 'app-matrix-traversal',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  templateUrl: './matrix-traversal.component.html',
  styleUrls: ['./matrix-traversal.component.css']
})
export class MatrixTraversalComponent implements OnInit {
  grid: (number | null)[][] = [];
  matrix: FormGroup;
  tableInput: FormGroup;
  maxMoves: number | null = null;
  pathCells: Set<string> = new Set();
  submittedMatrix: (number | null)[][] = [];
  formIsComplete = false;
  resultsVisible = false;
  buttonLabel: string = 'Show Table';

  constructor(private fb: FormBuilder) {
    this.matrix = this.fb.group({
      rows: [0, Validators.required],
      cols: [0, Validators.required],
    });

    this.tableInput = this.fb.group({
      input: this.fb.array([])  
    });
  }

  ngOnInit(): void {}

  get input(): FormArray {
    return this.tableInput.get('input') as FormArray;
  }

  getRowControls(rowIndex: number): FormArray {
    return this.input.at(rowIndex) as FormArray;
  }

  initializeTableForm(): void {
    const rows = this.matrix.value.rows;
    const cols = this.matrix.value.cols;

    this.grid = Array.from({ length: rows }, () => Array(cols).fill(null));

    const formRows = this.fb.array([]) as FormArray;
    for (let i = 0; i < rows; i++) {
      const formCols = this.fb.array([]);
      for (let j = 0; j < cols; j++) {
        formCols.push(this.fb.control(null, Validators.required));
      }
      formRows.push(formCols);
    }

    this.tableInput.setControl('input', formRows);
    this.formIsComplete = true; 
  }

  matrixValueChanged(rowIndex: number, colIndex: number, event: any) {
    const newValue = event.target.value;
    const formArray = this.tableInput.get('input') as FormArray;
    const row = formArray.at(rowIndex) as FormArray;
    row.at(colIndex).setValue(newValue);
  }

  onSubmitTableForm() {
    this.submittedMatrix = this.tableInput.value.input.map((row: any) => row.map((cell: any) => +cell));
    this.maxMoves = this.findMaxPath(this.submittedMatrix); 
    this.resultsVisible = true;
  }

  onSubmit(): void {
    this.initializeTableForm(); 
  }

  findMaxPath(grid: (number | null)[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    let currentRow = 0;

    for (let row = 0; row < m; row++) {
      if (grid[row][0] === 2) {
        currentRow = row;
        this.pathCells.add(`${row},0`);
        break;
      }
    }

    let moves = 0;

    for (let col = 0; col < n - 1; col++) {
      let nextRow = -1;
      let maxVal = -1;

      for (const newRow of [currentRow - 1, currentRow, currentRow + 1]) {
        if (
          newRow >= 0 &&
          newRow < m &&
          grid[newRow][col + 1] !== null &&
          grid[newRow][col + 1]! > grid[currentRow][col]! &&
          grid[newRow][col + 1]! > maxVal
        ) {
          maxVal = grid[newRow][col + 1]!;
          nextRow = newRow;
        }
      }

      if (nextRow !== -1) {
        currentRow = nextRow;
        this.pathCells.add(`${currentRow},${col + 1}`);
        moves++;
      } else {
        break;
      }
    }

    return moves;
  }

  isPartOfPath(row: number, col: number): boolean {
    return this.pathCells.has(`${row},${col}`);
  }

  toggleButtonLabel(): void {
    this.buttonLabel = this.buttonLabel === 'Show Table' ? 'Click TO Show Result Of Matrix' : 'Show Table';
  }
}
