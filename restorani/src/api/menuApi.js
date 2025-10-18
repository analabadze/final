import axios from 'axios';

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/categories.php`);
    return response.data.categories || [];
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

export const fetchMealsByCategory = async (categoryName) => {
  try {
    const finalCategory = categoryName || 'Beef'; // ნაგულისხმევი კატეგორია, თუ არაფერია არჩეული
    const response = await axios.get(`${BASE_URL}/filter.php?c=${finalCategory}`);
    
    // მონაცემების გასუფთავება და ფეიკ ფასის დამატება
    const mealsWithPrice = (response.data.meals || [])
      .slice(0, 10) 
      .map(meal => ({
        id: meal.idMeal,
        name: meal.strMeal,
        image: meal.strMealThumb,
        // ფეიკ ფასი $8-დან $25-მდე
        price: (Math.random() * (25 - 8) + 8).toFixed(2), 
        category: finalCategory
      }));
    
    return mealsWithPrice;
  } catch (error) {
    console.error(`Error fetching meals for ${categoryName}:`, error);
    return [];
  }
};