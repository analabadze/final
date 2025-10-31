const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';


let categoriesCache = null;


const getAxios = async () => {
  const { default: axios } = await import('axios');
  return axios;
};

export const fetchCategories = async () => {
  if (categoriesCache) {
    return categoriesCache;
  }
  try {
    const axios = await getAxios();
    const response = await axios.get(`${BASE_URL}/categories.php`);
    categoriesCache = response.data.categories || [];
    return categoriesCache;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};


const mealsCache = new Map();

export const fetchMealsByCategory = async (categoryName) => {
  const finalCategory = categoryName || 'Beef';

  if (mealsCache.has(finalCategory)) {
    return mealsCache.get(finalCategory);
  }

  try {
    const axios = await getAxios();
    const response = await axios.get(`${BASE_URL}/filter.php?c=${finalCategory}`);

    const mealsWithPrice = (response.data.meals || [])
      .slice(0, 10)
      .map(meal => ({
        id: meal.idMeal,
        name: meal.strMeal,
        image: meal.strMealThumb,
        price: (Math.random() * (25 - 8) + 8).toFixed(2),
        category: finalCategory
      }));

    mealsCache.set(finalCategory, mealsWithPrice);
    return mealsWithPrice;
  } catch (error) {
    console.error(`Error fetching meals for ${categoryName}:`, error);
    return [];
  }
};