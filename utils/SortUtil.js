class SortUtil {
    sortDateAsc(a, b) {
        if (a.actualDate > b.actualDate) {
            return 1;
        }

        if (a.actualDate < b.actualDate) {
            return -1;
        }

        return 0;
    }

    sortDateDecs(a, b) {
        if (a.actualDate > b.actualDate) {
            return -1;
        }

        if (a.actualDate < b.actualDate) {
            return 1;
        }

        return 0;
    }
}

module.exports = new SortUtil();