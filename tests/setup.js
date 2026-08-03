import '@testing-library/jest-dom';

class IntersectionObserverMock {
    observe() {}

    unobserve() {}

    disconnect() {}

    takeRecords() {
        return [];
    }
}

globalThis.IntersectionObserver = IntersectionObserverMock;
