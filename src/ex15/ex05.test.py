import numpy as np

def cosine_similarity(vec1, vec2):
    # Convert lists to numpy arrays
    vec1 = np.array(vec1)
    vec2 = np.array(vec2)
    
    # Compute dot product
    dot_product = np.vdot(vec1, vec2)
    
    # Compute magnitudes
    magnitude_vec1 = np.linalg.norm(vec1)
    magnitude_vec2 = np.linalg.norm(vec2)
    print(magnitude_vec1 * magnitude_vec2)
    print(dot_product)
    
    # Compute cosine similarity
    cos_alpha = dot_product / (magnitude_vec1 * magnitude_vec2)
    
    return cos_alpha

# Define vectors
vec1 = [1 - 1j, 2 - 1j]
vec2 = [1 + 1j, 2 + 2j]

# Calculate cos alpha
cos_alpha = cosine_similarity(vec1, vec2)
print("cos(α) =", cos_alpha)
