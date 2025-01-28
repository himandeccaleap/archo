import React from 'react'
import MainLayout from '../../layouts/main'
import PageHeader from '../../components/Page-header'
import BlogsList from '../../components/Blogs-List'

const Blogs = () => {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3')
  }, [])
    return (
      <MainLayout>
        <PageHeader
          title="Our Blogs"
          fullPath={[
            { id: 1, name: "home", url: "/" },
            { id: 2, name: "blogs", url: "/blogs" },
          ]}
        />
        <BlogsList />
      </MainLayout>
    );
}

export default Blogs;