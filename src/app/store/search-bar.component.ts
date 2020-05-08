import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductRepository } from '../model/product.repository'

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],

})

export class SearchBarComponent implements OnInit {

  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  private allPosts = []
  autoCompleteList: any[]

  @ViewChild('autocompleteInput') autocompleteInput: ElementRef;
  @Output() onSelectedOption = new EventEmitter();
  constructor(private repository: ProductRepository) { }

  ngOnInit() {
    this.myControl.valueChanges.subscribe(userInput => {
      this.autoCompleteExpenseList(userInput);
    })
  }

  private autoCompleteExpenseList(input) {
    let results = input
    let categoryList = this.filterCategoryList(results)
    this.autoCompleteList = categoryList;
    this.repository.searchOption.push(results);
  }

  filterCategoryList(val) {
    let filterList = [], filteredResults = []
    let choosencategory = this.repository.categorychosen();
    this.allPosts = this.repository.getProducts(choosencategory)
    if (typeof val != "string") {
      return [];
    }
    if (val === '' || val === null) {
      return [];
    }
    if (this.allPosts) {
      //for checking description
      filteredResults = this.allPosts.filter((s) =>
        s.description.toLowerCase().indexOf(val.toLowerCase()) != -1
      )
      //for checking name/title
      filterList = val ? this.allPosts.filter(s => s.name.toLowerCase().indexOf(val.toLowerCase()) != -1)
        : this.allPosts;
      console.log("filteredResults", filteredResults, filterList)
      //preference given to name, if its not prsent then check description match
      return filterList.length > 0 ? filterList : filteredResults.length > 0 ? filteredResults : []
    }
    else
      return [];
  }


  filterPostList(event) {
    this.focusOnPlaceInput();
  }

  focusOnPlaceInput() {
    this.autocompleteInput.nativeElement.focus();
    this.autocompleteInput.nativeElement.value = '';
  }

}
