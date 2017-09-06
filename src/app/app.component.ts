import {Component, ViewChild, OnInit} from '@angular/core';
import {PagerComponent} from './pager/pager.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    @ViewChild(PagerComponent, {read: PagerComponent}) pager: PagerComponent;

    // pagination code starts here

    allItemsCount: any = 0;
    itemsPerPage: any = 5;
    page: any = 1;
    skip = 0;
    limit = this.itemsPerPage;

    callbackPager(page, itemsPerPage) {
        this.itemsPerPage = itemsPerPage;
        this.skip = (page - 1) * this.itemsPerPage || 0;
        this.limit = this.allItemsCount - this.skip >= this.itemsPerPage ? this.itemsPerPage : this.allItemsCount - this.skip;
        this.page = page;

        this.getPagerData(this.skip, this.limit);
    }

    pagerSampleDataArr = [
        {
            name: 'Aditya',
            city: 'Mumbai',
            mobile: '1234567899',
            age: 10
        },
        {
            name: 'Vikas',
            city: 'Hisar',
            mobile: '2123456789',
            age: 50
        },
        {
            name: 'Rishi',
            city: 'Banglore',
            mobile: '3123456789',
            age: 30
        },
        {
            name: 'Amit',
            city: 'Mumbai',
            mobile: '1234564899',
            age: 10
        },
        {
            name: 'Vinnu',
            city: 'Hisar',
            mobile: '2123356789',
            age: 50
        },
        {
            name: 'Ram',
            city: 'Banglore',
            mobile: '3123453789',
            age: 30
        },
        {
            name: 'Atul',
            city: 'Mumbai',
            mobile: '1234561899',
            age: 10
        },
        {
            name: 'Abhishek',
            city: 'Delhi',
            mobile: '2124456789',
            age: 50
        },
        {
            name: 'Raman',
            city: 'Delhi',
            mobile: '3323456789',
            age: 30
        },
        {
            name: 'Kamal',
            city: 'Mumbai',
            mobile: '1224567899',
            age: 10
        },
        {
            name: 'Verma',
            city: 'Delhi',
            mobile: '2623456789',
            age: 50
        },
        {
            name: 'Vaibhav',
            city: 'Meerut',
            mobile: '3123256789',
            age: 30
        },
        {
            name: 'Lokesh',
            city: 'Gurgaon',
            mobile: '1234567899',
            age: 10
        },
        {
            name: 'Vikas',
            city: 'Hisar',
            mobile: '2153456789',
            age: 50
        },
        {
            name: 'Jay',
            city: 'Surat',
            mobile: '3123456789',
            age: 30
        },
        {
            name: 'Aditi',
            city: 'Surat',
            mobile: '1234567899',
            age: 10
        },
        {
            name: 'Abhishek',
            city: 'Meerut',
            mobile: '2123456789',
            age: 50
        },
        {
            name: 'Ram',
            city: 'Banglore',
            mobile: '3123466789',
            age: 30
        },
        {
            name: 'Vivek',
            city: 'Delhi',
            mobile: '2193456789',
            age: 50
        },
        {
            name: 'Rinku',
            city: 'Banglore',
            mobile: '3123496789',
            age: 30
        }
    ];

    pagerSelectedData = [];

    getPagerData(skip, limit) {
        this.pagerSelectedData = this.pagerSampleDataArr.slice(this.skip, (this.skip + this.limit));
        console.log(this.pagerSelectedData);
    }

    initPageForPagination() {
        this.allItemsCount = this.pagerSampleDataArr.length;
        this.pager.setPageHelper(this.page, this.allItemsCount, this.itemsPerPage);
        this.getPagerData(this.skip, this.limit);
    }

    ngOnInit() {
        this.initPageForPagination();
    }
}

