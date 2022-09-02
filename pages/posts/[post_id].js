import { useRouter } from 'next/router';

const PostDetail = () => {
 
    const router = useRouter();

    console.log('Route::', router.query);

    return(
        <h1>
            Post Detail Page is Here!
        </h1>
    )
}

export default PostDetail;