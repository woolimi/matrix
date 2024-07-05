import numpy as np

def complex_matrix_determinant(matrix):
    # Convert to numpy array
    matrix = np.array(matrix, dtype=np.complex128)
    
    # Compute determinant
    determinant = np.linalg.det(matrix)
    
    return determinant

# Define a 2x2 complex matrix
matrix = [[1 + 1j, 2 + 1j], [3 + 0j, 4 + 2j]]

# Calculate determinant
determinant_result = complex_matrix_determinant(matrix)
print("Determinant of the Matrix:")
print(determinant_result)
