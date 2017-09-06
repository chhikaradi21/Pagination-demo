import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit {

  @Input() callbackPager: any;
  @Input() skip: any;
  @Input() limit: any;

  // pagination code starts

  PER_PAGE_ITEMS = [5, 10, 20, 50, 100, 500, 1000];
  allItemsCount: any = 1;
  itemsPerPage: any = 5;

  // pager object
  pager: any = {};
  page: any = 1;

  // paged items
  pagedItems: any[];

  setPage(page: number) {
    this.page = page;
    this.pager = this.getPager(this.allItemsCount, this.page, this.itemsPerPage);
    this.callbackPager(page, this.itemsPerPage);
  }

  setPageHelper(page: number, allItemsCount: number, itemsPerPage: number) {
    this.itemsPerPage = itemsPerPage;
    this.allItemsCount = allItemsCount;
    this.pager = this.getPager(allItemsCount, page, itemsPerPage);

    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
  }

  setItemsPerPage(itemsPerPage) {
    this.itemsPerPage = parseInt(itemsPerPage);
    this.limit = parseInt(itemsPerPage);
    this.skip = 0;
    this.pager = this.getPager(this.allItemsCount, this.page, this.itemsPerPage);
    this.callbackPager(1, this.itemsPerPage);
  }

  // pagination code ends

  getPager(totalItems: number, currentPage: number = 1, pageSize: number = 10) {

    var range: any = function (start, end) {
      var foo = [];
      for (var i = start; i <= end; i++) {
        foo.push(i);
      }
      return foo;
    };

    // calculate total pages
    let totalPages = Math.ceil(totalItems / pageSize);

    let startPage: number, endPage: number;
    if (totalPages <= 10) {
      // less than 10 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 10 total pages so calculate start and end pages
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    // calculate start and end item indexes
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    let pages = range(startPage, endPage);

    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }

  ngOnInit() {

  }

}
