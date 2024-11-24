'use client'; // Asegura que el código se ejecute en el cliente

import { useState } from 'react';

const Home = () => {
  // Estado de las recetas
  const [recipes, setRecipes] = useState([
    { 
      id: 1, 
      title: 'Spaghetti Carbonara', 
      description: 'Una deliciosa receta italiana con pasta, huevo, panceta y queso parmesano.',
      image: '/images/spaghetti.jpg', 
      profileImage: 'https://dthezntil550i.cloudfront.net/f4/latest/f41908291942413280009640715/1280_960/1b2d9510-d66d-43a2-971a-cfcbb600e7fe.png', // Foto de perfil
      comments: [],
      votes: 0,
      ingredients: 'Pasta, huevo, panceta, queso parmesano, pimienta negra',
      time: '30 minutos',
      difficulty: 'Media',
    },
    { 
      id: 2, 
      title: 'Tacos al Pastor', 
      description: 'Tacos mexicanos con carne al pastor, piña y salsa.',
      image: '/images/tacos.jpg',
      profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeiGQCoJHB8ls2xOC3gE8iEuF81qWCe_V9zA&s', // Foto de perfil
      comments: [],
      votes: 0,
      ingredients: 'Carne al pastor, piña, tortillas de maíz, cilantro, cebolla, salsa roja',
      time: '15 minutos',
      difficulty: 'Fácil',
    },
    { 
      id: 3, 
      title: 'Sushi Roll', 
      description: 'Receta japonesa con arroz, pescado fresco y algas.',
      image: '/images/sushi.jpg',
      profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJbMBtleQ0FxP8CHkmDkp2Gqi3XBe-w2YYgQ&s', // Foto de perfil
      comments: [],
      votes: 0,
      ingredients: 'Arroz para sushi, pescado fresco, algas nori, vinagre de arroz',
      time: '60 minutos',
      difficulty: 'Alta',
    },
    { 
      id: 4, 
      title: 'Ensalada César', 
      description: 'Ensalada fresca con lechuga, pollo a la parrilla, queso parmesano y aderezo césar.',
      image: '/images/ensalada.jpg',
      profileImage: 'https://b2472105.smushcdn.com/2472105/wp-content/uploads/2023/09/Poses-Perfil-Profesional-Mujeres-ago.-10-2023-1-819x1024.jpg?lossy=1&strip=1&webp=1', // Foto de perfil
      comments: [],
      votes: 0,
      ingredients: 'Lechuga, pollo a la parrilla, queso parmesano, aderezo césar, croutones',
      time: '20 minutos',
      difficulty: 'Fácil',
    },
  ]);

  const [comment, setComment] = useState('');
  const [showComments, setShowComments] = useState(false);

  const handleVote = (recipeId: number, type: 'up' | 'down') => {
    const updatedRecipes = recipes.map((recipe) => {
      if (recipe.id === recipeId) {
        return { 
          ...recipe, 
          votes: type === 'up' ? recipe.votes + 1 : recipe.votes - 1 
        };
      }
      return recipe;
    });
    setRecipes(updatedRecipes);
  };

  const addComment = (recipeId: number, comment: string) => {
    const updatedRecipes = recipes.map((recipe) => {
      if (recipe.id === recipeId) {
        return { ...recipe, comments: [...recipe.comments, comment] };
      }
      return recipe;
    });
    
  };

  return (
    <div style={{ 
      background: 'linear-gradient(to bottom, #1c1c1c, #333)', 
      color: '#f1e6d3', 
      padding: '40px', 
      fontFamily: 'Arial, sans-serif' 
    }}>
      <header style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ fontSize: '4em', color: '#f1e6d3', textShadow: '0 8px 16px rgba(0, 0, 0, 0.6)' }}>
          ¡Recetas Épicas!
        </h1>
        <p style={{ fontSize: '1.5em', color: '#d3c8b1', opacity: '0.9', fontStyle: 'italic' }}>
          ¡Descubre, vota y comparte tus recetas favoritas con amigos!
        </p>
      </header>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginTop: '20px' }}>
        {recipes.map((recipe) => (
          <div key={recipe.id} 
            style={{
              background: '#2d2d2d',
              borderRadius: '12px', 
              padding: '25px', 
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)', 
              transition: 'transform 0.3s, box-shadow 0.3s ease-in-out', 
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <img 
                src={recipe.profileImage} 
                alt={`${recipe.title} profile`} 
                style={{
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '50%', 
                  marginRight: '15px',
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
                  transition: 'transform 0.2s ease-in-out',
                }} 
              />
              <div>
                <h2 style={{ fontSize: '1.8em', color: '#f1e6d3', marginBottom: '5px', fontWeight: 'bold' }}>
                  {recipe.title}
                </h2>
                <p style={{ color: '#d3c8b1', fontSize: '1.2em' }}>{recipe.description}</p>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginBottom: '20px' }}>
              <button
                onClick={() => handleVote(recipe.id, 'up')}
                style={{
                  backgroundColor: '#6a994e',
                  color: '#fff',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '12px',
                  fontSize: '1.2em',
                  cursor: 'pointer',
                  marginRight: '15px',
                  boxShadow: '0 4px 10px rgba(106, 153, 78, 0.4)',
                  transition: 'transform 0.2s, background-color 0.3s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4b7f3c'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6a994e'}
              >
                Upvote
              </button>
              <button
                onClick={() => handleVote(recipe.id, 'down')}
                style={{
                  backgroundColor: '#e67e22',
                  color: '#fff',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '12px',
                  fontSize: '1.2em',
                  cursor: 'pointer',
                  marginRight: '15px',
                  boxShadow: '0 4px 10px rgba(230, 126, 34, 0.4)',
                  transition: 'transform 0.2s, background-color 0.3s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d35400'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#e67e22'}
              >
                Downvote
              </button>
              <span style={{ fontSize: '1.3em', color: '#f1e6d3', fontWeight: 'bold' }}>Votos: {recipe.votes}</span>
            </div>

            <div style={{ marginBottom: '20px', color: '#d3c8b1', fontSize: '1.1em' }}>
              <p><strong>Ingredientes:</strong> {recipe.ingredients}</p>
              <p><strong>Tiempo:</strong> {recipe.time}</p>
              <p><strong>Dificultad:</strong> {recipe.difficulty}</p>
            </div>

            <button
              onClick={() => setShowComments(!showComments)}
              style={{
                padding: '15px 30px',
                backgroundColor: '#e67e22',
                border: 'none',
                color: '#fff',
                borderRadius: '12px',
                cursor: 'pointer',
                fontSize: '1.2em',
                transition: 'background-color 0.3s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d35400'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#e67e22'}
            >
              {showComments ? 'Ocultar comentarios' : 'Ver comentarios'}
            </button>

            {showComments && (
              <div style={{ marginTop: '20px', color: '#f1e6d3' }}>
                {recipe.comments.length > 0 ? (
                  recipe.comments.map((comment, index) => (
                    <p key={index} style={{ fontSize: '1.2em', margin: '5px 0' }}>"{comment}"</p>
                  ))
                ) : (
                  <p style={{ color: '#bbb' }}>No hay comentarios aún.</p>
                )}
                
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (comment.trim()) {
                      addComment(recipe.id, comment);
                      setComment('');
                    }
                  }}
                  style={{ marginTop: '20px' }}
                >
                  <input
                    type="text"
                    placeholder="Deja tu comentario épico..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '15px',
                      borderRadius: '12px',
                      marginBottom: '15px',
                      border: '2px solid #e67e22',
                      backgroundColor: '#fff',
                      color: '#333',
                      fontSize: '1.2em',
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      padding: '12px 25px',
                      backgroundColor: '#e67e22',
                      border: 'none',
                      color: '#fff',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      fontSize: '1.3em',
                    }}
                  >
                    Agregar comentario
                  </button>
                </form>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
