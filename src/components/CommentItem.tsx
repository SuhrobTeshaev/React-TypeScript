import {FC} from 'react';
import { IComment } from '../types/types';

interface CommentItemProps {
    comment:IComment
}
const CommentItem: FC<CommentItemProps> = ({comment}) => {
    return (  
        <div style={{border:'1px solid black'}}>
            {comment.id},{comment.name},{comment.body}
        
        </div>
    );
}
 
export default CommentItem;