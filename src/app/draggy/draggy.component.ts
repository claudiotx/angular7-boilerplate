import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ViewChildren,
  ViewEncapsulation,
  QueryList, ViewChild, ElementRef, Inject, Renderer2, EventEmitter, Output
} from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';
import { Title } from '@angular/platform-browser';
import * as moment from 'moment';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { combineLatest } from 'rxjs';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-draggy',
  templateUrl: './draggy.component.html',
  styleUrls: ['./draggy.component.scss']
})
export class DraggyComponent implements OnInit {

  // Context Variables
  // ------------------------------------------------------------
  public postStatus = 0;
  public error: string;

  // Domain Model
  // ------------------------------------------------------------
  public draggyList = [];

  // Lifecycle Methods
  // ------------------------------------------------------------
  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private titleService: Title,
    private route: ActivatedRoute,
    ) {
      // this.form = fb.group({
      //   task: this.task,
      //   day: this.day,
      //   duration: this.duration
      // });
    }

  ngOnInit() {
  }

  /* Internal State Update */
  swapOrder() {

  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.draggyList, event.previousIndex, event.currentIndex);
    // state management
    this.swapOrder(
    //   { item: this.dayResults[event.previousIndex],
    //     order: event.previousIndex },
    //   {item: this.dayResults[event.currentIndex],
    //     order: event.currentIndex }
    );
  }

  getDraggyItems() {
    this.apiService.getDraggyItems(0, 10)
    .subscribe(data => {
      this.draggyList = data;
    },
      err => {
        console.error(err);
        this.error = err;
      });
  }

}
