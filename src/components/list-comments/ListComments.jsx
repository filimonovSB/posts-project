import React from 'react'
import { Card } from 'antd'
import styled from 'styled-components'
import Box from '../UI/Box'

const ListComments = ({comments}) => {
    const FlexWrapper = styled.div`
        display: flex;
        flex-wrap: wrap;
    `

    return (
        <Box mt={15} mb={15}>
            <FlexWrapper>
                {comments.length 
                    ? 
                        comments.map((comment) => (
                                <Card
                                    key={comment.id}
                                    title="Комментарий"
                                    bordered={false}
                                    style={{ width: '350px', margin: '10px' }}
                                >
                                    <h4>Название:</h4> {comment.name}
                                    <h4>email:</h4> {comment.email}
                                    <h4>Содержание:</h4> {comment.body}
                                    <br />
                                </Card>
                            )
                        )
                    : 
                    <h2>Коментариев к этому посту нет!</h2>
                }
        </FlexWrapper>      
    </Box>
    )
}

export default ListComments