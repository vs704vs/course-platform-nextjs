import React from 'react'
import { useRouter } from 'next/router';

const Page = () => {

    const router = useRouter();

    console.log(router.query.username, router.query.module);

    return (
        <div>Page</div>
    )
      
}

export default Page