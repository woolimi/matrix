import numpy as np

def complex_cross_product(vec1, vec2):
    if len(vec1) != 3 or len(vec2) != 3:
        raise ValueError("Both vectors must be of length 3")
    
    # Convert to numpy arrays
    vec1 = np.array(vec1, dtype=np.complex128)
    vec2 = np.array(vec2, dtype=np.complex128)
    
    # Compute cross product
    cross_product = np.cross(vec1, vec2)
    
    return cross_product

# Calculate cross product
print("[1, 1j, 2 + 1j] X [1 + 1j, 2, 1] =\n",
    complex_cross_product([1, 1j, 2 + 1j], [1 + 1j, 2, 1])
)
print("[1 + 1j, 2 + 1j, 3 + 0j] X [4 + 2j, 5 + 3j, 6 + 1j] =\n",
    complex_cross_product([1 + 1j, 2 + 1j, 3 + 0j], [4 + 2j, 5 + 3j, 6 + 1j])
)
