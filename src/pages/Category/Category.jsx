
import { Link } from 'react-router-dom';
import Loader from '../../components/Loading/Loader';
import useCategory from '../../hooks/useCategory';
import { useState } from 'react';
import { request } from '../../utils/axios-utils';

function Category() {
      const { data: categoryData, isLoading: categoryLoading, refetch } = useCategory();
        const [deleting, setDeleting] = useState(false);

    //   console.log(categoryData?.data.result);
      const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this category?")) {
          setDeleting(true);
          try {
            await request({ url: `/Category/${id}`, method: "Delete" });
            refetch(); // Refetch categories after deletion
          } catch (error) {
            console.error("Error deleting category:", error);
          } finally {
            setDeleting(false);
          }
        }
      };
    if (categoryLoading || deleting) {
      return <Loader />;
    }
    return (
      <div>
        {categoryData?.data.result.map((category) => (
          <div key={category.id} className="d-flex justify-content-between">
            {category.name}
            <Link to={`/updateCategory/${category.id}`}>update</Link>
            <button onClick={() => handleDelete(category.id)}>delete</button>
          </div>
        ))}
      </div>
    );
}

export default Category
