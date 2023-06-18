class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
    }

    itemCount() {
        return this.collection.length;
    }

    pageCount() {
        return Math.ceil(this.collection.length / this.itemsPerPage);
    }

    pageItemCount(pageIndex) {
        if (pageIndex > this.pageCount() - 1 || pageIndex < 0) return -1;
        else if (pageIndex === this.pageCount() - 1) return this.collection.length % this.itemsPerPage || this.itemsPerPage;
        else return this.itemsPerPage
        // returns the number of items on the current page. page_index is zero based.
        // this method should return -1 for pageIndex values that are out of range
    }

    pageIndex(itemIndex) {
        if (itemIndex < 0 || itemIndex >= this.itemCount() || !this.collection.length) return -1;
        return Math.floor(itemIndex / this.itemsPerPage);
        // determines what page an item is on. Zero based indexes
        // this method should return -1 for itemIndex values that are out of range
    }
}

// const collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
const collection = [1, 2, 3, 4, 5, 6, 7, 8]
//const collection = [1]
const helper = new PaginationHelper(collection, 8)
console.log(helper.pageItemCount(0))
