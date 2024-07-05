import numpy as np

def dot_product(vec1, vec2):
    # Convert lists to numpy arrays
    vec1 = np.array(vec1)
    vec2 = np.array(vec2)
    
    # Compute dot product
    return np.vdot(vec1, vec2)
        
# Calculate cos alpha
print("[1 + i, 2]·[1 , i]=", dot_product([1 + 1j, 2], [1, 1j]))
print("[1 + i, 2 + i]·[1 , i + 1]=", dot_product([1 + 1j, 2 + 1j], [1, 1 + 1j]))
