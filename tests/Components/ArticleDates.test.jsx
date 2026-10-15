import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ArticleDates from '../../resources/js/components/ArticleDates';

const labels = { published: 'Opublikowano', updated: 'Zaktualizowano' };
const article = { publishedAt: '2026-10-08', publishedDate: '8 października 2026' };
describe('Article dates', () => {
    it('shows the publication date without an invented update', () => {
        const { container } = render(<ArticleDates article={article} labels={labels} />);
        expect(screen.getByText(/Opublikowano/)).toBeVisible();
        expect(container.querySelector('time')).toHaveAttribute('datetime', '2026-10-08');
        expect(screen.queryByText(/Zaktualizowano/)).not.toBeInTheDocument();
    });
    it.each(['2026-10-08', '2026-10-15'])('shows an explicit update dated %s', updatedAt => {
        const { container } = render(<ArticleDates article={{ ...article, updatedAt, updatedDate: 'Data aktualizacji' }} labels={labels} />);
        expect(container.querySelectorAll('time')).toHaveLength(2);
        expect(screen.getByText('Data aktualizacji')).toHaveAttribute('datetime', updatedAt);
    });
});
