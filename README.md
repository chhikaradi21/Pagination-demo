# AngularJS 4 Pagination Component
This Pagination component is written in AngularJS 4 and can be used to manage multiple pages in an HTML table. You can set items per page variable easily using dropdown. Because this is written as a component so its JS and HTML code is included in the component, so no need to include HTML template separately.

### Features
1. THis can be used with tables having data data devided among multiple pages.
2. Items per page limit can be reset easily using dropdown.
3. Show selected items out of total items like(Showing 0 - 5 of 50).

### How it works?
You have to initialize pager component after loading data on page load like
```
this.pager.setPageHelper(this.page, this.allItemsCount, this.itemsPerPage); // initialize on page load.
```
And initialize the following data in your component in which you are using this component like
```
allItemsCount : any = 0;
itemsPerPage : any = 5;
page : any = 1;
skip = 0;
limit = this.itemsPerPage;
callbackPager(page, itemsPerPage){
    this.itemsPerPage = itemsPerPage;
    this.skip = (page - 1) * this.itemsPerPage || 0;
    this.limit = this.allItemsCount - this.skip >= this.itemsPerPage ? this.itemsPerPage : this.allItemsCount - this.skip;
    this.page = page;

    this.getPagerData(this.skip, this.limit);
}
```
Pager component in HTML file
callbackPager - You have to pass a callback function which will be called when someone click on next/previous pages on pagination template.
skip - initial value(eg. 0)
limit - initial value(eg. 5 or 10)
```
<app-pager [callbackPager]="callbackPager.bind(this)" [skip]="this.skip" [limit]="this.limit"></app-pager>
```
Its done after this pager component is responsible for everything.

Usage:
```
*ngFor="let item of dataArr | sort : selectedField"

```
### How to run on local
Follow these steps
1. git clone git@github.com:chhikaradi21/pagination-demo.git
2. cd pagination-demo
3. npm install(using node version 6)
4. ng serve
5. Access in browser at port 4200 (localhost:4200)

### Working Demo
<a href="http://adityachhikara.me/github-demos?block=pagination" target="_blank">See Pagination Demo</a>


## Further help
1. This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.2.
2. Node version 6
