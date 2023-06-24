import numpy as np
from PIL import Image
import tensorflow as tf

# Carga los pesos previamente entrenados de la red neuronal
model = tf.keras.models.load_model('ruta/al/archivo/modelo.h5')

# Función para procesar la imagen y realizar la predicción
def predecir_digito(imagen):
    # Ajusta el tamaño de la imagen a 28x28 píxeles
    imagen = imagen.resize((28, 28))
    # Convierte la imagen a escala de grises
    imagen = imagen.convert('L')
    # Convierte la imagen a un arreglo de numpy
    imagen = np.array(imagen)
    # Normaliza los valores de píxeles entre 0 y 1
    imagen = imagen / 255.0
    # Añade una dimensión adicional para que coincida con el formato de entrada del modelo (28x28x1)
    imagen = np.expand_dims(imagen, axis=-1)
    # Realiza la predicción del dígito utilizando el modelo
    prediccion = model.predict(np.array([imagen]))
    # Obtiene el índice de la clase con mayor probabilidad
    digito = np.argmax(prediccion)
    return digito

# Carga la imagen de entrada
imagen = Image.open('ruta/al/archivo/imagen.png')

# Realiza la predicción del dígito
digito_predicho = predecir_digito(imagen)

# Muestra el resultado
print('El dígito predicho es:', digito_predicho)
