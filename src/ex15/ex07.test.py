import numpy as np

def complex_matrix_multiplication(matrix1, matrix2):
    # Convert to numpy arrays
    matrix1 = np.array(matrix1, dtype=np.complex128)
    matrix2 = np.array(matrix2, dtype=np.complex128)
    
    # Compute matrix multiplication
    result = np.dot(matrix1, matrix2)
    
    return result


# Calculate matrix multiplication
print("[[2j, -2], [-2, 2j]] * [4j, 2]=\n", complex_matrix_multiplication([[2j, -2], [-2, 2j]], [4j, 2]))
print("[[3j, -5], [6, 8]] * [[2j - 1, 1], [4, 2]]=\n", complex_matrix_multiplication([[3j, -5], [6, 8]], [[2j - 1, 1], [4, 2]]))
