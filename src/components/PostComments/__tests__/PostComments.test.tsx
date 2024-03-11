import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Post from '..';

test('Teste de inserção de dois comentários', () => {
    render(<Post />);

    const commentTextarea = screen.getByTestId('comment-textarea');
    const commentSubmitButton = screen.getByTestId('comment-submit-button');
    const commentsList = screen.getByTestId('comments-list');

    fireEvent.change(commentTextarea, { target: { value: 'Primeiro comentário' } });
    fireEvent.click(commentSubmitButton);

    fireEvent.change(commentTextarea, { target: { value: 'Segundo comentário' } });
    fireEvent.click(commentSubmitButton);

    // eslint-disable-next-line testing-library/no-node-access
    expect(commentsList.children.length).toBe(2);
    expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
    expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
});
