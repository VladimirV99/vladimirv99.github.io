import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Custom404() {
  // return (
  //   <div className="App">
  //     <div className="center">
  //       <h1>Page not found</h1>
  //       Please go to <Link href="/">vladimirv99.github.io</Link>
  //     </div>
  //   </div>
  // );
  const router = useRouter();

  useEffect(() => {
    router.replace('/');
  });

  return null;
}
