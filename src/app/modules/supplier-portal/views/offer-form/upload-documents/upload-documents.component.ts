import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-documents',
  templateUrl: './upload-documents.component.html',
  styleUrls: ['./upload-documents.component.css']
})
export class UploadDocumentsComponent implements OnInit {
  
  @Input('sectionData') sectionData: any;

  constructor() { }

  ngOnInit(): void {
  }

}
