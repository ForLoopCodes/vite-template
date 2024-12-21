export interface Blog {
  id: number;
  type: string;
  title: string;
  date: string;
  topic: string;
  text: string;
  views: number;
}

export const blogs: Blog[] = [
  {
    id: 1,
    type: "DEV BLOG",
    title: "AI Mathematics - The roadmap to kill it all.",
    date: "14/12/24",
    topic: "Artificial Intelligence",
    text: `## Arcticles and sources
- https://davidstutz.de/how-i-prepared-for-deepmind-and-google-ai-research-internship-interviews-in-2019/
- freecodecamp
- coursera

## Python
[Jupyter notebook](https://nextcloud.mpi-klsb.mpg.de/index.php/s/NN6CYwm5MxSFNTQ)

## Algebra
-   [Exponents](http://www.mclph.umn.edu/mathrefresh/exponents.html)
-   [Radicals](https://tutorial.math.lamar.edu/classes/alg/Radicals.aspx)
-   [Factorials](https://www.youtube.com/watch?v=pGg40oiQsUk&feature=youtu.be)
-   [Summations](https://www.youtube.com/watch?v=LDfaYXXAcHY&feature=youtu.be)
-   [Scientific Notations](https://www.khanacademy.org/math/pre-algebra/pre-algebra-exponents-radicals)

## Linear Algebra
-   [**Scalars**](http://www.sciencebits.com/vector_algebra) — a single number (can be real or natural).
-   [**Vectors**](http://www.sciencebits.com/vector_algebra) — a list of numbers, arranged in order. Consider them as points in space with each element representing the coordinate along an axis.
-   [**Matrices**](https://www.mathsisfun.com/algebra/matrix-introduction.html) — a 2-D array of numbers where each number is identified by 2 indices.
-   [**Tensors**](https://mathworld.wolfram.com/Tensor.html)  — an N-D array (N>2) of numbers, arranged on a regular grid with N-axes. Important in Machine Learning, Deep Learning and  [Computer Vision](https://github.com/jasmcaus/caer).
-   [**Eigenvectors & Eigenvalues**](https://www.mathsisfun.com/algebra/eigenvalue.html) — special vectors and their corresponding scalar quantity. Understand the significance and how to find them.
-   [**Singular Value Decomposition**](https://web.mit.edu/be.400/www/SVD/Singular_Value_Decomposition.htm)  — factorization of a matrix into 3 matrices. Understand the properties and applications.
-   [**Principal Component Analysis (PCA)**](https://royalsocietypublishing.org/doi/10.1098/rsta.2015.0202) — understand the significance, properties, and applications.

## Calculus
-   [**Derivatives**](https://www.mathsisfun.com/calculus/derivatives-introduction.html) — rules (addition, product, chain rule, and so on), hyperbolic derivatives (tanh, cosh, and so on) and partial derivatives.
-   [**Vector/Matrix Calculus**](http://www.personal.rdg.ac.uk/~sis01xh/teaching/CY4C9/ANN3.pdf) — different derivative operators (Gradient, Jacobian, Hessian and Laplacian)
-   [**Gradient Algorithms**](https://towardsdatascience.com/gradient-descent-algorithm-and-its-variants-10f652806a3) _**_ — local/global maxima and minima, saddle points, convex functions, batches and mini-batches, stochastic gradient descent, and performance comparison.

## Statistics & Probability
-   [**Basic Statistics**](https://www.dummies.com/education/math/statistics/statistics-for-dummies-cheat-sheet/) — Mean, median, mode, variance, covariance, and so on.
-   [**Basic rules in probability**](http://www.milefoot.com/math/stat/prob-rules.htm) — events (dependent and independent), sample spaces, conditional probability.
-   [**Random variables**](https://www.khanacademy.org/math/statistics-probability/random-variables-stats-library)— continuous and discrete, expectation, variance, distributions (joint and conditional).
-   **[Bayes’ Theorem](https://www.freecodecamp.org/news/bayes-rule-explained/)** — calculates validity of beliefs. Bayesian software helps machines recognize patterns and make decisions.
-   [**Maximum Likelihood Estimation (MLE)**](https://towardsdatascience.com/probability-concepts-explained-maximum-likelihood-estimation-c7b4342fdbb1) — parameter estimation. Requires knowledge of fundamental probability concepts (joint probability and independence of events).
-   [**Common Distributions**](https://www.stat.tamu.edu/~twehrly/611/distab.pdf) — binomial, poisson, bernoulli, gaussian, exponential.

## Information Theory
-   [**Entropy**](https://mathoverflow.net/questions/146463/what-is-entropy-really)  — also called Shannon Entropy. Used to measure the uncertainty in an experiment.
-   [**Cross-Entropy**](https://machinelearningmastery.com/cross-entropy-for-machine-learning)  — compares two probability distributions and tells us how similar they are.
-   [**Kullback Leibler Divergence**](https://www.countbayesie.com/blog/2017/5/9/kullback-leibler-divergence-explained)  — another measure of how similar two probability distributions are.
-   [**Viterbi Algorithm**](https://www.cis.upenn.edu/~cis262/notes/Example-Viterbi-DNA.pdf) — widely used in Natural Language Processing (NLP) and Speech.
-   [**Encoder-Decoder**](https://hackernoon.com/information-theory-of-neural-networks-c96a0f0a8d9) — used in Machine Translation RNNs and other models.

## Coursera Math Course
https://www.coursera.org/specializations/mathematics-for-machine-learning-and-data-science

## Pattern Recognization and machine learning book
https://www.microsoft.com/en-us/research/uploads/prod/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf

## Computer Vision and advance math notes pdf
https://www.vision.rwth-aachen.de/media/course/SS/2015/machine-learning/ml15-part18-repetition.pdf

## Cryptography and maths book
https://algebra.mathematik.uni-siegen.de/barakat/Lehre/WS10/Cryptography/lecture_notes/Cryptography.pdf

## NPTEL (CS, if you search for AI on their channel you can get it)
The best NPTEL Lectures I could find (will cover your whole CS degree) 
1. Digital Logic by Prof. S. Srinivasan, IITM 
2. COA by IITKgp 
3. DSA by Prof. Naveen Garg, IITD 
4. Algo Design by Prof. Abhiram Ranade, IITB 
5. TOC by Prof. Somenath Biswas, IITK 
6. Compilers by Prof. Sanjeev K Aggarwal, IITK 
7. OS by Prof. Sourav Bansal, IITD 
8. DBMS by Prof. PP Chakraborti, IITKgp 
9. Computer Networks by Prof. S.Ghosh, IITKgp
  
Links 
1. [https://youtube.com/playlist?list=PL803563859BF7ED8C](https://t.co/Xzb2CuZrA9)
2. [https://youtube.com/playlist?list=PL-8LShlBMIjUuI9beQJHZUF14we25NToB](https://t.co/ezwzj6sc77) 
3. [https://youtube.com/playlist?list=PLBF3763AF2E1C572F](https://t.co/IL1hNKC2p2)
4. [https://youtube.com/playlist?list=PL7DC83C6B3312DF1E](https://t.co/Y7Nb65q2lB)
5. [https://youtube.com/playlist?list=PLbMVogVj5nJSd25WnSU144ZyGmsqjuKr3](https://t.co/os8IzMq0uI)
6. [https://youtube.com/playlist?list=PLbMVogVj5nJTmKzaSlCpGgi7qxgcRRs8h](https://t.co/BliEWvegvc)
7. [https://youtube.com/playlist?list=PLsylUObW5M3CAGT6OdubyH6FztKfJCcFB](https://t.co/BoGOx5ehHT)
8. [https://youtube.com/playlist?list=PLyvBGMFYV3auVdxQ1-88ivNFpmUEy-U3M](https://t.co/MRzJBMz8Zt) 
9. [https://youtube.com/playlist?list=PL32DBC269EF768F74](https://t.co/bgq8ejrN77) 

A* Algorithm - https://www.youtube.com/watch?v=yMcZvZayJUA
AI - https://www.youtube.com/@iit/search?query=artificial

## list of topics to study:

-   Technical interviews:
    -   Python:
        -   data types
        -   memory management & garbage collection
        -   functions (by value and by reference, default values, kwargs)
        -   local and global functions
        -   return values
        -   global and local variables
        -   lambda expressions
        -   argument lists
        -   for, foreach, while, if else, inline if else
        -   generators and yield
        -   class definitions
        -   private and public attributes/functions
        -   static variables
        -   self object
        -   inheritance (overwriting)
        -   constructors, destructors (definition, order)
        -   magic functions
        -   classes in classes
        -   importing mechanisms
        -   error handling
        -   built-in data structures
        -   built-in functions
    -   Discrete (Hanke script):
        -   Permutations
        -   Combinatorics
        -   Graphs
        -   Connected components
    -   Calculus (AFI Script):
        -   Continuity (definition, theorems)
        -   Differentiation (definition, core functions, various rules)
        -   Integration (definition, rules, core functions)
        -   Ordinary differential euqations
        -   Multivariate functions
        -   Taylor expansion
        -   Norms, triangle inequality
        -   Convolution
        -   Variational methods
        -   Maximum and minimum value problems
        -   Trigonometric functions
        -   Exponential function
    -   Linear algebra (Hanke script):
        -   Vector spaces
        -   Matrices (trace, orthogonal, diagonal)
        -   Linear, affine , projective transformations
        -   Eigenvalues
        -   Orthogonal group
        -   Linear equation systems
    -   Numerical analysis & optimization (Dahmen book):
        -   Stability
        -   LR deocmposition
        -   QR decomposition
        -   SVD decomposition
        -   Eigenvalue decomposition
        -   Least squares
        -   Gradient descent (convergence, convex and non-convex)
        -   Newton-method
    -   Statistics:
        -   Axioms of probability
        -   Random variables
        -   Discrete distributions
        -   Expected value
        -   Variance
        -   Moments
        -   Unbiased estimators (Bernoulli, Binomial)
        -   Continuous distirbutions (Gaussian, Exponential, Dirac, Poisson, t-Student)
        -   Maximum likelihood
        -   hypothesis testing and confidence intervals
    -   Logic (script):
        -   Propositional logic
        -   First-order logic
    -   Algorithms & data structures (slides + Cormen book):
        -   Arrays and linked lists, stacks, queues
        -   Hash tables
        -   Sorting (mergesort, quicksort, lower bound, radix sort)
        -   Priority queues
        -   Graphs (adjacency lists, arrays, matrices)
        -   Breadth-first
        -   Depths-first
        -   DAGs
        -   Distraer
        -   Kruskal
        -   Linear programming
        -   Dynamic programming
        -   Sink-source problems/maximum flow
        -   Big-O (definition, theorems)
        -   Worst-case analysis
        -   Average-case analysis
    -   Complexity (?):
        -   Computability (definition)
        -   Halting problem
        -   Complexity class (definition, theorems)
        -   P
        -   NP
        -   SPACE
        -   NSPACE
        -   Relationships
    -   Software Engineering (slides SWE + project management):
        -   Software processes (waterfall model)
        -   Agile development and tools (Scrum, Kanban, pair programming, extreme programming)
        -   Requirements
        -   System design
        -   Testing (coverage, unit testing, test first)
        -   Patterns (?)
        -   Project management
    -   Machine learning (Bishop book + Sutton book + Leibe slides):
        -   Curse of dimensionality (distances, norms, probabilities in high dimension)
        -   Decision theory
        -   Naive Bayes
        -   Nearest neighbor
        -   Kernel density estimation
        -   Regularized least squares
        -   Bayesian linear regression
        -   Least squares classification
        -   Fisher's discriminant
        -   Logistic regression
        -   Neural networks
            -   Backpropagation
            -   Universal approximators
        -   SVMs
        -   Gaussian processes
        -   Graphical models (conditional independence, MRFs, sum-product and max-sum)
        -   K-means
        -   DBSCAN
        -   Mean shift
        -   PCA
        -   PPCA
        -   Monte Carlo
        -   Markov Chain Monte Carlo
        -   Gibbs Sampling
        -   Boosting
        -   Decision trees
        -   Random forests
        -   PAC learning
        -   Reinforcement learning (?)

Additional topics to brush up on:

-   Interpretability (review paper and tutorial)
-   Fairness (tutorial paper)
-   Backdooring (regular papers), membership inference (review or tutorial), privacy (differentiable privacy, federated learning tutorial or review)
-   Transformers (tutorial)
-   3D Vision (3D Geometry, Nerf, etc.)
-   Graph Neural Networks`,
    views: 0,
  },
  {
    id: 1,
    type: "MISC",
    title: "AI Mathematics - The roadmap to kill it all.",
    date: "14/12/24",
    topic: "Artificial Intelligence",
    text: `## Arcticles and sources
- https://davidstutz.de/how-i-prepared-for-deepmind-and-google-ai-research-internship-interviews-in-2019/
- freecodecamp
- coursera

## Python
[Jupyter notebook](https://nextcloud.mpi-klsb.mpg.de/index.php/s/NN6CYwm5MxSFNTQ)

## Algebra
-   [Exponents](http://www.mclph.umn.edu/mathrefresh/exponents.html)
-   [Radicals](https://tutorial.math.lamar.edu/classes/alg/Radicals.aspx)
-   [Factorials](https://www.youtube.com/watch?v=pGg40oiQsUk&feature=youtu.be)
-   [Summations](https://www.youtube.com/watch?v=LDfaYXXAcHY&feature=youtu.be)
-   [Scientific Notations](https://www.khanacademy.org/math/pre-algebra/pre-algebra-exponents-radicals)

## Linear Algebra
-   [**Scalars**](http://www.sciencebits.com/vector_algebra) — a single number (can be real or natural).
-   [**Vectors**](http://www.sciencebits.com/vector_algebra) — a list of numbers, arranged in order. Consider them as points in space with each element representing the coordinate along an axis.
-   [**Matrices**](https://www.mathsisfun.com/algebra/matrix-introduction.html) — a 2-D array of numbers where each number is identified by 2 indices.
-   [**Tensors**](https://mathworld.wolfram.com/Tensor.html)  — an N-D array (N>2) of numbers, arranged on a regular grid with N-axes. Important in Machine Learning, Deep Learning and  [Computer Vision](https://github.com/jasmcaus/caer).
-   [**Eigenvectors & Eigenvalues**](https://www.mathsisfun.com/algebra/eigenvalue.html) — special vectors and their corresponding scalar quantity. Understand the significance and how to find them.
-   [**Singular Value Decomposition**](https://web.mit.edu/be.400/www/SVD/Singular_Value_Decomposition.htm)  — factorization of a matrix into 3 matrices. Understand the properties and applications.
-   [**Principal Component Analysis (PCA)**](https://royalsocietypublishing.org/doi/10.1098/rsta.2015.0202) — understand the significance, properties, and applications.

## Calculus
-   [**Derivatives**](https://www.mathsisfun.com/calculus/derivatives-introduction.html) — rules (addition, product, chain rule, and so on), hyperbolic derivatives (tanh, cosh, and so on) and partial derivatives.
-   [**Vector/Matrix Calculus**](http://www.personal.rdg.ac.uk/~sis01xh/teaching/CY4C9/ANN3.pdf) — different derivative operators (Gradient, Jacobian, Hessian and Laplacian)
-   [**Gradient Algorithms**](https://towardsdatascience.com/gradient-descent-algorithm-and-its-variants-10f652806a3) _**_ — local/global maxima and minima, saddle points, convex functions, batches and mini-batches, stochastic gradient descent, and performance comparison.

## Statistics & Probability
-   [**Basic Statistics**](https://www.dummies.com/education/math/statistics/statistics-for-dummies-cheat-sheet/) — Mean, median, mode, variance, covariance, and so on.
-   [**Basic rules in probability**](http://www.milefoot.com/math/stat/prob-rules.htm) — events (dependent and independent), sample spaces, conditional probability.
-   [**Random variables**](https://www.khanacademy.org/math/statistics-probability/random-variables-stats-library)— continuous and discrete, expectation, variance, distributions (joint and conditional).
-   **[Bayes’ Theorem](https://www.freecodecamp.org/news/bayes-rule-explained/)** — calculates validity of beliefs. Bayesian software helps machines recognize patterns and make decisions.
-   [**Maximum Likelihood Estimation (MLE)**](https://towardsdatascience.com/probability-concepts-explained-maximum-likelihood-estimation-c7b4342fdbb1) — parameter estimation. Requires knowledge of fundamental probability concepts (joint probability and independence of events).
-   [**Common Distributions**](https://www.stat.tamu.edu/~twehrly/611/distab.pdf) — binomial, poisson, bernoulli, gaussian, exponential.

## Information Theory
-   [**Entropy**](https://mathoverflow.net/questions/146463/what-is-entropy-really)  — also called Shannon Entropy. Used to measure the uncertainty in an experiment.
-   [**Cross-Entropy**](https://machinelearningmastery.com/cross-entropy-for-machine-learning)  — compares two probability distributions and tells us how similar they are.
-   [**Kullback Leibler Divergence**](https://www.countbayesie.com/blog/2017/5/9/kullback-leibler-divergence-explained)  — another measure of how similar two probability distributions are.
-   [**Viterbi Algorithm**](https://www.cis.upenn.edu/~cis262/notes/Example-Viterbi-DNA.pdf) — widely used in Natural Language Processing (NLP) and Speech.
-   [**Encoder-Decoder**](https://hackernoon.com/information-theory-of-neural-networks-c96a0f0a8d9) — used in Machine Translation RNNs and other models.

## Coursera Math Course
https://www.coursera.org/specializations/mathematics-for-machine-learning-and-data-science

## Pattern Recognization and machine learning book
https://www.microsoft.com/en-us/research/uploads/prod/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf

## Computer Vision and advance math notes pdf
https://www.vision.rwth-aachen.de/media/course/SS/2015/machine-learning/ml15-part18-repetition.pdf

## Cryptography and maths book
https://algebra.mathematik.uni-siegen.de/barakat/Lehre/WS10/Cryptography/lecture_notes/Cryptography.pdf

## NPTEL (CS, if you search for AI on their channel you can get it)
The best NPTEL Lectures I could find (will cover your whole CS degree) 
1. Digital Logic by Prof. S. Srinivasan, IITM 
2. COA by IITKgp 
3. DSA by Prof. Naveen Garg, IITD 
4. Algo Design by Prof. Abhiram Ranade, IITB 
5. TOC by Prof. Somenath Biswas, IITK 
6. Compilers by Prof. Sanjeev K Aggarwal, IITK 
7. OS by Prof. Sourav Bansal, IITD 
8. DBMS by Prof. PP Chakraborti, IITKgp 
9. Computer Networks by Prof. S.Ghosh, IITKgp
  
Links 
1. [https://youtube.com/playlist?list=PL803563859BF7ED8C](https://t.co/Xzb2CuZrA9)
2. [https://youtube.com/playlist?list=PL-8LShlBMIjUuI9beQJHZUF14we25NToB](https://t.co/ezwzj6sc77) 
3. [https://youtube.com/playlist?list=PLBF3763AF2E1C572F](https://t.co/IL1hNKC2p2)
4. [https://youtube.com/playlist?list=PL7DC83C6B3312DF1E](https://t.co/Y7Nb65q2lB)
5. [https://youtube.com/playlist?list=PLbMVogVj5nJSd25WnSU144ZyGmsqjuKr3](https://t.co/os8IzMq0uI)
6. [https://youtube.com/playlist?list=PLbMVogVj5nJTmKzaSlCpGgi7qxgcRRs8h](https://t.co/BliEWvegvc)
7. [https://youtube.com/playlist?list=PLsylUObW5M3CAGT6OdubyH6FztKfJCcFB](https://t.co/BoGOx5ehHT)
8. [https://youtube.com/playlist?list=PLyvBGMFYV3auVdxQ1-88ivNFpmUEy-U3M](https://t.co/MRzJBMz8Zt) 
9. [https://youtube.com/playlist?list=PL32DBC269EF768F74](https://t.co/bgq8ejrN77) 

A* Algorithm - https://www.youtube.com/watch?v=yMcZvZayJUA
AI - https://www.youtube.com/@iit/search?query=artificial

## list of topics to study:

-   Technical interviews:
    -   Python:
        -   data types
        -   memory management & garbage collection
        -   functions (by value and by reference, default values, kwargs)
        -   local and global functions
        -   return values
        -   global and local variables
        -   lambda expressions
        -   argument lists
        -   for, foreach, while, if else, inline if else
        -   generators and yield
        -   class definitions
        -   private and public attributes/functions
        -   static variables
        -   self object
        -   inheritance (overwriting)
        -   constructors, destructors (definition, order)
        -   magic functions
        -   classes in classes
        -   importing mechanisms
        -   error handling
        -   built-in data structures
        -   built-in functions
    -   Discrete (Hanke script):
        -   Permutations
        -   Combinatorics
        -   Graphs
        -   Connected components
    -   Calculus (AFI Script):
        -   Continuity (definition, theorems)
        -   Differentiation (definition, core functions, various rules)
        -   Integration (definition, rules, core functions)
        -   Ordinary differential euqations
        -   Multivariate functions
        -   Taylor expansion
        -   Norms, triangle inequality
        -   Convolution
        -   Variational methods
        -   Maximum and minimum value problems
        -   Trigonometric functions
        -   Exponential function
    -   Linear algebra (Hanke script):
        -   Vector spaces
        -   Matrices (trace, orthogonal, diagonal)
        -   Linear, affine , projective transformations
        -   Eigenvalues
        -   Orthogonal group
        -   Linear equation systems
    -   Numerical analysis & optimization (Dahmen book):
        -   Stability
        -   LR deocmposition
        -   QR decomposition
        -   SVD decomposition
        -   Eigenvalue decomposition
        -   Least squares
        -   Gradient descent (convergence, convex and non-convex)
        -   Newton-method
    -   Statistics:
        -   Axioms of probability
        -   Random variables
        -   Discrete distributions
        -   Expected value
        -   Variance
        -   Moments
        -   Unbiased estimators (Bernoulli, Binomial)
        -   Continuous distirbutions (Gaussian, Exponential, Dirac, Poisson, t-Student)
        -   Maximum likelihood
        -   hypothesis testing and confidence intervals
    -   Logic (script):
        -   Propositional logic
        -   First-order logic
    -   Algorithms & data structures (slides + Cormen book):
        -   Arrays and linked lists, stacks, queues
        -   Hash tables
        -   Sorting (mergesort, quicksort, lower bound, radix sort)
        -   Priority queues
        -   Graphs (adjacency lists, arrays, matrices)
        -   Breadth-first
        -   Depths-first
        -   DAGs
        -   Distraer
        -   Kruskal
        -   Linear programming
        -   Dynamic programming
        -   Sink-source problems/maximum flow
        -   Big-O (definition, theorems)
        -   Worst-case analysis
        -   Average-case analysis
    -   Complexity (?):
        -   Computability (definition)
        -   Halting problem
        -   Complexity class (definition, theorems)
        -   P
        -   NP
        -   SPACE
        -   NSPACE
        -   Relationships
    -   Software Engineering (slides SWE + project management):
        -   Software processes (waterfall model)
        -   Agile development and tools (Scrum, Kanban, pair programming, extreme programming)
        -   Requirements
        -   System design
        -   Testing (coverage, unit testing, test first)
        -   Patterns (?)
        -   Project management
    -   Machine learning (Bishop book + Sutton book + Leibe slides):
        -   Curse of dimensionality (distances, norms, probabilities in high dimension)
        -   Decision theory
        -   Naive Bayes
        -   Nearest neighbor
        -   Kernel density estimation
        -   Regularized least squares
        -   Bayesian linear regression
        -   Least squares classification
        -   Fisher's discriminant
        -   Logistic regression
        -   Neural networks
            -   Backpropagation
            -   Universal approximators
        -   SVMs
        -   Gaussian processes
        -   Graphical models (conditional independence, MRFs, sum-product and max-sum)
        -   K-means
        -   DBSCAN
        -   Mean shift
        -   PCA
        -   PPCA
        -   Monte Carlo
        -   Markov Chain Monte Carlo
        -   Gibbs Sampling
        -   Boosting
        -   Decision trees
        -   Random forests
        -   PAC learning
        -   Reinforcement learning (?)

Additional topics to brush up on:

-   Interpretability (review paper and tutorial)
-   Fairness (tutorial paper)
-   Backdooring (regular papers), membership inference (review or tutorial), privacy (differentiable privacy, federated learning tutorial or review)
-   Transformers (tutorial)
-   3D Vision (3D Geometry, Nerf, etc.)
-   Graph Neural Networks`,
    views: 0,
  },
  {
    id: 1,
    type: "PERSONAL",
    title: "AI Mathematics - The roadmap to kill it all.",
    date: "14/12/24",
    topic: "Artificial Intelligence",
    text: `## Arcticles and sources
- https://davidstutz.de/how-i-prepared-for-deepmind-and-google-ai-research-internship-interviews-in-2019/
- freecodecamp
- coursera

## Python
[Jupyter notebook](https://nextcloud.mpi-klsb.mpg.de/index.php/s/NN6CYwm5MxSFNTQ)

## Algebra
-   [Exponents](http://www.mclph.umn.edu/mathrefresh/exponents.html)
-   [Radicals](https://tutorial.math.lamar.edu/classes/alg/Radicals.aspx)
-   [Factorials](https://www.youtube.com/watch?v=pGg40oiQsUk&feature=youtu.be)
-   [Summations](https://www.youtube.com/watch?v=LDfaYXXAcHY&feature=youtu.be)
-   [Scientific Notations](https://www.khanacademy.org/math/pre-algebra/pre-algebra-exponents-radicals)

## Linear Algebra
-   [**Scalars**](http://www.sciencebits.com/vector_algebra) — a single number (can be real or natural).
-   [**Vectors**](http://www.sciencebits.com/vector_algebra) — a list of numbers, arranged in order. Consider them as points in space with each element representing the coordinate along an axis.
-   [**Matrices**](https://www.mathsisfun.com/algebra/matrix-introduction.html) — a 2-D array of numbers where each number is identified by 2 indices.
-   [**Tensors**](https://mathworld.wolfram.com/Tensor.html)  — an N-D array (N>2) of numbers, arranged on a regular grid with N-axes. Important in Machine Learning, Deep Learning and  [Computer Vision](https://github.com/jasmcaus/caer).
-   [**Eigenvectors & Eigenvalues**](https://www.mathsisfun.com/algebra/eigenvalue.html) — special vectors and their corresponding scalar quantity. Understand the significance and how to find them.
-   [**Singular Value Decomposition**](https://web.mit.edu/be.400/www/SVD/Singular_Value_Decomposition.htm)  — factorization of a matrix into 3 matrices. Understand the properties and applications.
-   [**Principal Component Analysis (PCA)**](https://royalsocietypublishing.org/doi/10.1098/rsta.2015.0202) — understand the significance, properties, and applications.

## Calculus
-   [**Derivatives**](https://www.mathsisfun.com/calculus/derivatives-introduction.html) — rules (addition, product, chain rule, and so on), hyperbolic derivatives (tanh, cosh, and so on) and partial derivatives.
-   [**Vector/Matrix Calculus**](http://www.personal.rdg.ac.uk/~sis01xh/teaching/CY4C9/ANN3.pdf) — different derivative operators (Gradient, Jacobian, Hessian and Laplacian)
-   [**Gradient Algorithms**](https://towardsdatascience.com/gradient-descent-algorithm-and-its-variants-10f652806a3) _**_ — local/global maxima and minima, saddle points, convex functions, batches and mini-batches, stochastic gradient descent, and performance comparison.

## Statistics & Probability
-   [**Basic Statistics**](https://www.dummies.com/education/math/statistics/statistics-for-dummies-cheat-sheet/) — Mean, median, mode, variance, covariance, and so on.
-   [**Basic rules in probability**](http://www.milefoot.com/math/stat/prob-rules.htm) — events (dependent and independent), sample spaces, conditional probability.
-   [**Random variables**](https://www.khanacademy.org/math/statistics-probability/random-variables-stats-library)— continuous and discrete, expectation, variance, distributions (joint and conditional).
-   **[Bayes’ Theorem](https://www.freecodecamp.org/news/bayes-rule-explained/)** — calculates validity of beliefs. Bayesian software helps machines recognize patterns and make decisions.
-   [**Maximum Likelihood Estimation (MLE)**](https://towardsdatascience.com/probability-concepts-explained-maximum-likelihood-estimation-c7b4342fdbb1) — parameter estimation. Requires knowledge of fundamental probability concepts (joint probability and independence of events).
-   [**Common Distributions**](https://www.stat.tamu.edu/~twehrly/611/distab.pdf) — binomial, poisson, bernoulli, gaussian, exponential.

## Information Theory
-   [**Entropy**](https://mathoverflow.net/questions/146463/what-is-entropy-really)  — also called Shannon Entropy. Used to measure the uncertainty in an experiment.
-   [**Cross-Entropy**](https://machinelearningmastery.com/cross-entropy-for-machine-learning)  — compares two probability distributions and tells us how similar they are.
-   [**Kullback Leibler Divergence**](https://www.countbayesie.com/blog/2017/5/9/kullback-leibler-divergence-explained)  — another measure of how similar two probability distributions are.
-   [**Viterbi Algorithm**](https://www.cis.upenn.edu/~cis262/notes/Example-Viterbi-DNA.pdf) — widely used in Natural Language Processing (NLP) and Speech.
-   [**Encoder-Decoder**](https://hackernoon.com/information-theory-of-neural-networks-c96a0f0a8d9) — used in Machine Translation RNNs and other models.

## Coursera Math Course
https://www.coursera.org/specializations/mathematics-for-machine-learning-and-data-science

## Pattern Recognization and machine learning book
https://www.microsoft.com/en-us/research/uploads/prod/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf

## Computer Vision and advance math notes pdf
https://www.vision.rwth-aachen.de/media/course/SS/2015/machine-learning/ml15-part18-repetition.pdf

## Cryptography and maths book
https://algebra.mathematik.uni-siegen.de/barakat/Lehre/WS10/Cryptography/lecture_notes/Cryptography.pdf

## NPTEL (CS, if you search for AI on their channel you can get it)
The best NPTEL Lectures I could find (will cover your whole CS degree) 
1. Digital Logic by Prof. S. Srinivasan, IITM 
2. COA by IITKgp 
3. DSA by Prof. Naveen Garg, IITD 
4. Algo Design by Prof. Abhiram Ranade, IITB 
5. TOC by Prof. Somenath Biswas, IITK 
6. Compilers by Prof. Sanjeev K Aggarwal, IITK 
7. OS by Prof. Sourav Bansal, IITD 
8. DBMS by Prof. PP Chakraborti, IITKgp 
9. Computer Networks by Prof. S.Ghosh, IITKgp
  
Links 
1. [https://youtube.com/playlist?list=PL803563859BF7ED8C](https://t.co/Xzb2CuZrA9)
2. [https://youtube.com/playlist?list=PL-8LShlBMIjUuI9beQJHZUF14we25NToB](https://t.co/ezwzj6sc77) 
3. [https://youtube.com/playlist?list=PLBF3763AF2E1C572F](https://t.co/IL1hNKC2p2)
4. [https://youtube.com/playlist?list=PL7DC83C6B3312DF1E](https://t.co/Y7Nb65q2lB)
5. [https://youtube.com/playlist?list=PLbMVogVj5nJSd25WnSU144ZyGmsqjuKr3](https://t.co/os8IzMq0uI)
6. [https://youtube.com/playlist?list=PLbMVogVj5nJTmKzaSlCpGgi7qxgcRRs8h](https://t.co/BliEWvegvc)
7. [https://youtube.com/playlist?list=PLsylUObW5M3CAGT6OdubyH6FztKfJCcFB](https://t.co/BoGOx5ehHT)
8. [https://youtube.com/playlist?list=PLyvBGMFYV3auVdxQ1-88ivNFpmUEy-U3M](https://t.co/MRzJBMz8Zt) 
9. [https://youtube.com/playlist?list=PL32DBC269EF768F74](https://t.co/bgq8ejrN77) 

A* Algorithm - https://www.youtube.com/watch?v=yMcZvZayJUA
AI - https://www.youtube.com/@iit/search?query=artificial

## list of topics to study:

-   Technical interviews:
    -   Python:
        -   data types
        -   memory management & garbage collection
        -   functions (by value and by reference, default values, kwargs)
        -   local and global functions
        -   return values
        -   global and local variables
        -   lambda expressions
        -   argument lists
        -   for, foreach, while, if else, inline if else
        -   generators and yield
        -   class definitions
        -   private and public attributes/functions
        -   static variables
        -   self object
        -   inheritance (overwriting)
        -   constructors, destructors (definition, order)
        -   magic functions
        -   classes in classes
        -   importing mechanisms
        -   error handling
        -   built-in data structures
        -   built-in functions
    -   Discrete (Hanke script):
        -   Permutations
        -   Combinatorics
        -   Graphs
        -   Connected components
    -   Calculus (AFI Script):
        -   Continuity (definition, theorems)
        -   Differentiation (definition, core functions, various rules)
        -   Integration (definition, rules, core functions)
        -   Ordinary differential euqations
        -   Multivariate functions
        -   Taylor expansion
        -   Norms, triangle inequality
        -   Convolution
        -   Variational methods
        -   Maximum and minimum value problems
        -   Trigonometric functions
        -   Exponential function
    -   Linear algebra (Hanke script):
        -   Vector spaces
        -   Matrices (trace, orthogonal, diagonal)
        -   Linear, affine , projective transformations
        -   Eigenvalues
        -   Orthogonal group
        -   Linear equation systems
    -   Numerical analysis & optimization (Dahmen book):
        -   Stability
        -   LR deocmposition
        -   QR decomposition
        -   SVD decomposition
        -   Eigenvalue decomposition
        -   Least squares
        -   Gradient descent (convergence, convex and non-convex)
        -   Newton-method
    -   Statistics:
        -   Axioms of probability
        -   Random variables
        -   Discrete distributions
        -   Expected value
        -   Variance
        -   Moments
        -   Unbiased estimators (Bernoulli, Binomial)
        -   Continuous distirbutions (Gaussian, Exponential, Dirac, Poisson, t-Student)
        -   Maximum likelihood
        -   hypothesis testing and confidence intervals
    -   Logic (script):
        -   Propositional logic
        -   First-order logic
    -   Algorithms & data structures (slides + Cormen book):
        -   Arrays and linked lists, stacks, queues
        -   Hash tables
        -   Sorting (mergesort, quicksort, lower bound, radix sort)
        -   Priority queues
        -   Graphs (adjacency lists, arrays, matrices)
        -   Breadth-first
        -   Depths-first
        -   DAGs
        -   Distraer
        -   Kruskal
        -   Linear programming
        -   Dynamic programming
        -   Sink-source problems/maximum flow
        -   Big-O (definition, theorems)
        -   Worst-case analysis
        -   Average-case analysis
    -   Complexity (?):
        -   Computability (definition)
        -   Halting problem
        -   Complexity class (definition, theorems)
        -   P
        -   NP
        -   SPACE
        -   NSPACE
        -   Relationships
    -   Software Engineering (slides SWE + project management):
        -   Software processes (waterfall model)
        -   Agile development and tools (Scrum, Kanban, pair programming, extreme programming)
        -   Requirements
        -   System design
        -   Testing (coverage, unit testing, test first)
        -   Patterns (?)
        -   Project management
    -   Machine learning (Bishop book + Sutton book + Leibe slides):
        -   Curse of dimensionality (distances, norms, probabilities in high dimension)
        -   Decision theory
        -   Naive Bayes
        -   Nearest neighbor
        -   Kernel density estimation
        -   Regularized least squares
        -   Bayesian linear regression
        -   Least squares classification
        -   Fisher's discriminant
        -   Logistic regression
        -   Neural networks
            -   Backpropagation
            -   Universal approximators
        -   SVMs
        -   Gaussian processes
        -   Graphical models (conditional independence, MRFs, sum-product and max-sum)
        -   K-means
        -   DBSCAN
        -   Mean shift
        -   PCA
        -   PPCA
        -   Monte Carlo
        -   Markov Chain Monte Carlo
        -   Gibbs Sampling
        -   Boosting
        -   Decision trees
        -   Random forests
        -   PAC learning
        -   Reinforcement learning (?)

Additional topics to brush up on:

-   Interpretability (review paper and tutorial)
-   Fairness (tutorial paper)
-   Backdooring (regular papers), membership inference (review or tutorial), privacy (differentiable privacy, federated learning tutorial or review)
-   Transformers (tutorial)
-   3D Vision (3D Geometry, Nerf, etc.)
-   Graph Neural Networks`,
    views: 0,
  },
  {
    id: 1,
    type: "RESEARCH",
    title: "AI Mathematics - The roadmap to kill it all.",
    date: "14/12/24",
    topic: "Artificial Intelligence",
    text: `## Arcticles and sources
- https://davidstutz.de/how-i-prepared-for-deepmind-and-google-ai-research-internship-interviews-in-2019/
- freecodecamp
- coursera

## Python
[Jupyter notebook](https://nextcloud.mpi-klsb.mpg.de/index.php/s/NN6CYwm5MxSFNTQ)

## Algebra
-   [Exponents](http://www.mclph.umn.edu/mathrefresh/exponents.html)
-   [Radicals](https://tutorial.math.lamar.edu/classes/alg/Radicals.aspx)
-   [Factorials](https://www.youtube.com/watch?v=pGg40oiQsUk&feature=youtu.be)
-   [Summations](https://www.youtube.com/watch?v=LDfaYXXAcHY&feature=youtu.be)
-   [Scientific Notations](https://www.khanacademy.org/math/pre-algebra/pre-algebra-exponents-radicals)

## Linear Algebra
-   [**Scalars**](http://www.sciencebits.com/vector_algebra) — a single number (can be real or natural).
-   [**Vectors**](http://www.sciencebits.com/vector_algebra) — a list of numbers, arranged in order. Consider them as points in space with each element representing the coordinate along an axis.
-   [**Matrices**](https://www.mathsisfun.com/algebra/matrix-introduction.html) — a 2-D array of numbers where each number is identified by 2 indices.
-   [**Tensors**](https://mathworld.wolfram.com/Tensor.html)  — an N-D array (N>2) of numbers, arranged on a regular grid with N-axes. Important in Machine Learning, Deep Learning and  [Computer Vision](https://github.com/jasmcaus/caer).
-   [**Eigenvectors & Eigenvalues**](https://www.mathsisfun.com/algebra/eigenvalue.html) — special vectors and their corresponding scalar quantity. Understand the significance and how to find them.
-   [**Singular Value Decomposition**](https://web.mit.edu/be.400/www/SVD/Singular_Value_Decomposition.htm)  — factorization of a matrix into 3 matrices. Understand the properties and applications.
-   [**Principal Component Analysis (PCA)**](https://royalsocietypublishing.org/doi/10.1098/rsta.2015.0202) — understand the significance, properties, and applications.

## Calculus
-   [**Derivatives**](https://www.mathsisfun.com/calculus/derivatives-introduction.html) — rules (addition, product, chain rule, and so on), hyperbolic derivatives (tanh, cosh, and so on) and partial derivatives.
-   [**Vector/Matrix Calculus**](http://www.personal.rdg.ac.uk/~sis01xh/teaching/CY4C9/ANN3.pdf) — different derivative operators (Gradient, Jacobian, Hessian and Laplacian)
-   [**Gradient Algorithms**](https://towardsdatascience.com/gradient-descent-algorithm-and-its-variants-10f652806a3) _**_ — local/global maxima and minima, saddle points, convex functions, batches and mini-batches, stochastic gradient descent, and performance comparison.

## Statistics & Probability
-   [**Basic Statistics**](https://www.dummies.com/education/math/statistics/statistics-for-dummies-cheat-sheet/) — Mean, median, mode, variance, covariance, and so on.
-   [**Basic rules in probability**](http://www.milefoot.com/math/stat/prob-rules.htm) — events (dependent and independent), sample spaces, conditional probability.
-   [**Random variables**](https://www.khanacademy.org/math/statistics-probability/random-variables-stats-library)— continuous and discrete, expectation, variance, distributions (joint and conditional).
-   **[Bayes’ Theorem](https://www.freecodecamp.org/news/bayes-rule-explained/)** — calculates validity of beliefs. Bayesian software helps machines recognize patterns and make decisions.
-   [**Maximum Likelihood Estimation (MLE)**](https://towardsdatascience.com/probability-concepts-explained-maximum-likelihood-estimation-c7b4342fdbb1) — parameter estimation. Requires knowledge of fundamental probability concepts (joint probability and independence of events).
-   [**Common Distributions**](https://www.stat.tamu.edu/~twehrly/611/distab.pdf) — binomial, poisson, bernoulli, gaussian, exponential.

## Information Theory
-   [**Entropy**](https://mathoverflow.net/questions/146463/what-is-entropy-really)  — also called Shannon Entropy. Used to measure the uncertainty in an experiment.
-   [**Cross-Entropy**](https://machinelearningmastery.com/cross-entropy-for-machine-learning)  — compares two probability distributions and tells us how similar they are.
-   [**Kullback Leibler Divergence**](https://www.countbayesie.com/blog/2017/5/9/kullback-leibler-divergence-explained)  — another measure of how similar two probability distributions are.
-   [**Viterbi Algorithm**](https://www.cis.upenn.edu/~cis262/notes/Example-Viterbi-DNA.pdf) — widely used in Natural Language Processing (NLP) and Speech.
-   [**Encoder-Decoder**](https://hackernoon.com/information-theory-of-neural-networks-c96a0f0a8d9) — used in Machine Translation RNNs and other models.

## Coursera Math Course
https://www.coursera.org/specializations/mathematics-for-machine-learning-and-data-science

## Pattern Recognization and machine learning book
https://www.microsoft.com/en-us/research/uploads/prod/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf

## Computer Vision and advance math notes pdf
https://www.vision.rwth-aachen.de/media/course/SS/2015/machine-learning/ml15-part18-repetition.pdf

## Cryptography and maths book
https://algebra.mathematik.uni-siegen.de/barakat/Lehre/WS10/Cryptography/lecture_notes/Cryptography.pdf

## NPTEL (CS, if you search for AI on their channel you can get it)
The best NPTEL Lectures I could find (will cover your whole CS degree) 
1. Digital Logic by Prof. S. Srinivasan, IITM 
2. COA by IITKgp 
3. DSA by Prof. Naveen Garg, IITD 
4. Algo Design by Prof. Abhiram Ranade, IITB 
5. TOC by Prof. Somenath Biswas, IITK 
6. Compilers by Prof. Sanjeev K Aggarwal, IITK 
7. OS by Prof. Sourav Bansal, IITD 
8. DBMS by Prof. PP Chakraborti, IITKgp 
9. Computer Networks by Prof. S.Ghosh, IITKgp
  
Links 
1. [https://youtube.com/playlist?list=PL803563859BF7ED8C](https://t.co/Xzb2CuZrA9)
2. [https://youtube.com/playlist?list=PL-8LShlBMIjUuI9beQJHZUF14we25NToB](https://t.co/ezwzj6sc77) 
3. [https://youtube.com/playlist?list=PLBF3763AF2E1C572F](https://t.co/IL1hNKC2p2)
4. [https://youtube.com/playlist?list=PL7DC83C6B3312DF1E](https://t.co/Y7Nb65q2lB)
5. [https://youtube.com/playlist?list=PLbMVogVj5nJSd25WnSU144ZyGmsqjuKr3](https://t.co/os8IzMq0uI)
6. [https://youtube.com/playlist?list=PLbMVogVj5nJTmKzaSlCpGgi7qxgcRRs8h](https://t.co/BliEWvegvc)
7. [https://youtube.com/playlist?list=PLsylUObW5M3CAGT6OdubyH6FztKfJCcFB](https://t.co/BoGOx5ehHT)
8. [https://youtube.com/playlist?list=PLyvBGMFYV3auVdxQ1-88ivNFpmUEy-U3M](https://t.co/MRzJBMz8Zt) 
9. [https://youtube.com/playlist?list=PL32DBC269EF768F74](https://t.co/bgq8ejrN77) 

A* Algorithm - https://www.youtube.com/watch?v=yMcZvZayJUA
AI - https://www.youtube.com/@iit/search?query=artificial

## list of topics to study:

-   Technical interviews:
    -   Python:
        -   data types
        -   memory management & garbage collection
        -   functions (by value and by reference, default values, kwargs)
        -   local and global functions
        -   return values
        -   global and local variables
        -   lambda expressions
        -   argument lists
        -   for, foreach, while, if else, inline if else
        -   generators and yield
        -   class definitions
        -   private and public attributes/functions
        -   static variables
        -   self object
        -   inheritance (overwriting)
        -   constructors, destructors (definition, order)
        -   magic functions
        -   classes in classes
        -   importing mechanisms
        -   error handling
        -   built-in data structures
        -   built-in functions
    -   Discrete (Hanke script):
        -   Permutations
        -   Combinatorics
        -   Graphs
        -   Connected components
    -   Calculus (AFI Script):
        -   Continuity (definition, theorems)
        -   Differentiation (definition, core functions, various rules)
        -   Integration (definition, rules, core functions)
        -   Ordinary differential euqations
        -   Multivariate functions
        -   Taylor expansion
        -   Norms, triangle inequality
        -   Convolution
        -   Variational methods
        -   Maximum and minimum value problems
        -   Trigonometric functions
        -   Exponential function
    -   Linear algebra (Hanke script):
        -   Vector spaces
        -   Matrices (trace, orthogonal, diagonal)
        -   Linear, affine , projective transformations
        -   Eigenvalues
        -   Orthogonal group
        -   Linear equation systems
    -   Numerical analysis & optimization (Dahmen book):
        -   Stability
        -   LR deocmposition
        -   QR decomposition
        -   SVD decomposition
        -   Eigenvalue decomposition
        -   Least squares
        -   Gradient descent (convergence, convex and non-convex)
        -   Newton-method
    -   Statistics:
        -   Axioms of probability
        -   Random variables
        -   Discrete distributions
        -   Expected value
        -   Variance
        -   Moments
        -   Unbiased estimators (Bernoulli, Binomial)
        -   Continuous distirbutions (Gaussian, Exponential, Dirac, Poisson, t-Student)
        -   Maximum likelihood
        -   hypothesis testing and confidence intervals
    -   Logic (script):
        -   Propositional logic
        -   First-order logic
    -   Algorithms & data structures (slides + Cormen book):
        -   Arrays and linked lists, stacks, queues
        -   Hash tables
        -   Sorting (mergesort, quicksort, lower bound, radix sort)
        -   Priority queues
        -   Graphs (adjacency lists, arrays, matrices)
        -   Breadth-first
        -   Depths-first
        -   DAGs
        -   Distraer
        -   Kruskal
        -   Linear programming
        -   Dynamic programming
        -   Sink-source problems/maximum flow
        -   Big-O (definition, theorems)
        -   Worst-case analysis
        -   Average-case analysis
    -   Complexity (?):
        -   Computability (definition)
        -   Halting problem
        -   Complexity class (definition, theorems)
        -   P
        -   NP
        -   SPACE
        -   NSPACE
        -   Relationships
    -   Software Engineering (slides SWE + project management):
        -   Software processes (waterfall model)
        -   Agile development and tools (Scrum, Kanban, pair programming, extreme programming)
        -   Requirements
        -   System design
        -   Testing (coverage, unit testing, test first)
        -   Patterns (?)
        -   Project management
    -   Machine learning (Bishop book + Sutton book + Leibe slides):
        -   Curse of dimensionality (distances, norms, probabilities in high dimension)
        -   Decision theory
        -   Naive Bayes
        -   Nearest neighbor
        -   Kernel density estimation
        -   Regularized least squares
        -   Bayesian linear regression
        -   Least squares classification
        -   Fisher's discriminant
        -   Logistic regression
        -   Neural networks
            -   Backpropagation
            -   Universal approximators
        -   SVMs
        -   Gaussian processes
        -   Graphical models (conditional independence, MRFs, sum-product and max-sum)
        -   K-means
        -   DBSCAN
        -   Mean shift
        -   PCA
        -   PPCA
        -   Monte Carlo
        -   Markov Chain Monte Carlo
        -   Gibbs Sampling
        -   Boosting
        -   Decision trees
        -   Random forests
        -   PAC learning
        -   Reinforcement learning (?)

Additional topics to brush up on:

-   Interpretability (review paper and tutorial)
-   Fairness (tutorial paper)
-   Backdooring (regular papers), membership inference (review or tutorial), privacy (differentiable privacy, federated learning tutorial or review)
-   Transformers (tutorial)
-   3D Vision (3D Geometry, Nerf, etc.)
-   Graph Neural Networks`,
    views: 0,
  },
  {
    id: 1,
    type: "BUSINESS",
    title: "AI Mathematics - The roadmap to kill it all.",
    date: "14/12/24",
    topic: "Artificial Intelligence",
    text: `## Arcticles and sources
- https://davidstutz.de/how-i-prepared-for-deepmind-and-google-ai-research-internship-interviews-in-2019/
- freecodecamp
- coursera

## Python
[Jupyter notebook](https://nextcloud.mpi-klsb.mpg.de/index.php/s/NN6CYwm5MxSFNTQ)

## Algebra
-   [Exponents](http://www.mclph.umn.edu/mathrefresh/exponents.html)
-   [Radicals](https://tutorial.math.lamar.edu/classes/alg/Radicals.aspx)
-   [Factorials](https://www.youtube.com/watch?v=pGg40oiQsUk&feature=youtu.be)
-   [Summations](https://www.youtube.com/watch?v=LDfaYXXAcHY&feature=youtu.be)
-   [Scientific Notations](https://www.khanacademy.org/math/pre-algebra/pre-algebra-exponents-radicals)

## Linear Algebra
-   [**Scalars**](http://www.sciencebits.com/vector_algebra) — a single number (can be real or natural).
-   [**Vectors**](http://www.sciencebits.com/vector_algebra) — a list of numbers, arranged in order. Consider them as points in space with each element representing the coordinate along an axis.
-   [**Matrices**](https://www.mathsisfun.com/algebra/matrix-introduction.html) — a 2-D array of numbers where each number is identified by 2 indices.
-   [**Tensors**](https://mathworld.wolfram.com/Tensor.html)  — an N-D array (N>2) of numbers, arranged on a regular grid with N-axes. Important in Machine Learning, Deep Learning and  [Computer Vision](https://github.com/jasmcaus/caer).
-   [**Eigenvectors & Eigenvalues**](https://www.mathsisfun.com/algebra/eigenvalue.html) — special vectors and their corresponding scalar quantity. Understand the significance and how to find them.
-   [**Singular Value Decomposition**](https://web.mit.edu/be.400/www/SVD/Singular_Value_Decomposition.htm)  — factorization of a matrix into 3 matrices. Understand the properties and applications.
-   [**Principal Component Analysis (PCA)**](https://royalsocietypublishing.org/doi/10.1098/rsta.2015.0202) — understand the significance, properties, and applications.

## Calculus
-   [**Derivatives**](https://www.mathsisfun.com/calculus/derivatives-introduction.html) — rules (addition, product, chain rule, and so on), hyperbolic derivatives (tanh, cosh, and so on) and partial derivatives.
-   [**Vector/Matrix Calculus**](http://www.personal.rdg.ac.uk/~sis01xh/teaching/CY4C9/ANN3.pdf) — different derivative operators (Gradient, Jacobian, Hessian and Laplacian)
-   [**Gradient Algorithms**](https://towardsdatascience.com/gradient-descent-algorithm-and-its-variants-10f652806a3) _**_ — local/global maxima and minima, saddle points, convex functions, batches and mini-batches, stochastic gradient descent, and performance comparison.

## Statistics & Probability
-   [**Basic Statistics**](https://www.dummies.com/education/math/statistics/statistics-for-dummies-cheat-sheet/) — Mean, median, mode, variance, covariance, and so on.
-   [**Basic rules in probability**](http://www.milefoot.com/math/stat/prob-rules.htm) — events (dependent and independent), sample spaces, conditional probability.
-   [**Random variables**](https://www.khanacademy.org/math/statistics-probability/random-variables-stats-library)— continuous and discrete, expectation, variance, distributions (joint and conditional).
-   **[Bayes’ Theorem](https://www.freecodecamp.org/news/bayes-rule-explained/)** — calculates validity of beliefs. Bayesian software helps machines recognize patterns and make decisions.
-   [**Maximum Likelihood Estimation (MLE)**](https://towardsdatascience.com/probability-concepts-explained-maximum-likelihood-estimation-c7b4342fdbb1) — parameter estimation. Requires knowledge of fundamental probability concepts (joint probability and independence of events).
-   [**Common Distributions**](https://www.stat.tamu.edu/~twehrly/611/distab.pdf) — binomial, poisson, bernoulli, gaussian, exponential.

## Information Theory
-   [**Entropy**](https://mathoverflow.net/questions/146463/what-is-entropy-really)  — also called Shannon Entropy. Used to measure the uncertainty in an experiment.
-   [**Cross-Entropy**](https://machinelearningmastery.com/cross-entropy-for-machine-learning)  — compares two probability distributions and tells us how similar they are.
-   [**Kullback Leibler Divergence**](https://www.countbayesie.com/blog/2017/5/9/kullback-leibler-divergence-explained)  — another measure of how similar two probability distributions are.
-   [**Viterbi Algorithm**](https://www.cis.upenn.edu/~cis262/notes/Example-Viterbi-DNA.pdf) — widely used in Natural Language Processing (NLP) and Speech.
-   [**Encoder-Decoder**](https://hackernoon.com/information-theory-of-neural-networks-c96a0f0a8d9) — used in Machine Translation RNNs and other models.

## Coursera Math Course
https://www.coursera.org/specializations/mathematics-for-machine-learning-and-data-science

## Pattern Recognization and machine learning book
https://www.microsoft.com/en-us/research/uploads/prod/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf

## Computer Vision and advance math notes pdf
https://www.vision.rwth-aachen.de/media/course/SS/2015/machine-learning/ml15-part18-repetition.pdf

## Cryptography and maths book
https://algebra.mathematik.uni-siegen.de/barakat/Lehre/WS10/Cryptography/lecture_notes/Cryptography.pdf

## NPTEL (CS, if you search for AI on their channel you can get it)
The best NPTEL Lectures I could find (will cover your whole CS degree) 
1. Digital Logic by Prof. S. Srinivasan, IITM 
2. COA by IITKgp 
3. DSA by Prof. Naveen Garg, IITD 
4. Algo Design by Prof. Abhiram Ranade, IITB 
5. TOC by Prof. Somenath Biswas, IITK 
6. Compilers by Prof. Sanjeev K Aggarwal, IITK 
7. OS by Prof. Sourav Bansal, IITD 
8. DBMS by Prof. PP Chakraborti, IITKgp 
9. Computer Networks by Prof. S.Ghosh, IITKgp
  
Links 
1. [https://youtube.com/playlist?list=PL803563859BF7ED8C](https://t.co/Xzb2CuZrA9)
2. [https://youtube.com/playlist?list=PL-8LShlBMIjUuI9beQJHZUF14we25NToB](https://t.co/ezwzj6sc77) 
3. [https://youtube.com/playlist?list=PLBF3763AF2E1C572F](https://t.co/IL1hNKC2p2)
4. [https://youtube.com/playlist?list=PL7DC83C6B3312DF1E](https://t.co/Y7Nb65q2lB)
5. [https://youtube.com/playlist?list=PLbMVogVj5nJSd25WnSU144ZyGmsqjuKr3](https://t.co/os8IzMq0uI)
6. [https://youtube.com/playlist?list=PLbMVogVj5nJTmKzaSlCpGgi7qxgcRRs8h](https://t.co/BliEWvegvc)
7. [https://youtube.com/playlist?list=PLsylUObW5M3CAGT6OdubyH6FztKfJCcFB](https://t.co/BoGOx5ehHT)
8. [https://youtube.com/playlist?list=PLyvBGMFYV3auVdxQ1-88ivNFpmUEy-U3M](https://t.co/MRzJBMz8Zt) 
9. [https://youtube.com/playlist?list=PL32DBC269EF768F74](https://t.co/bgq8ejrN77) 

A* Algorithm - https://www.youtube.com/watch?v=yMcZvZayJUA
AI - https://www.youtube.com/@iit/search?query=artificial

## list of topics to study:

-   Technical interviews:
    -   Python:
        -   data types
        -   memory management & garbage collection
        -   functions (by value and by reference, default values, kwargs)
        -   local and global functions
        -   return values
        -   global and local variables
        -   lambda expressions
        -   argument lists
        -   for, foreach, while, if else, inline if else
        -   generators and yield
        -   class definitions
        -   private and public attributes/functions
        -   static variables
        -   self object
        -   inheritance (overwriting)
        -   constructors, destructors (definition, order)
        -   magic functions
        -   classes in classes
        -   importing mechanisms
        -   error handling
        -   built-in data structures
        -   built-in functions
    -   Discrete (Hanke script):
        -   Permutations
        -   Combinatorics
        -   Graphs
        -   Connected components
    -   Calculus (AFI Script):
        -   Continuity (definition, theorems)
        -   Differentiation (definition, core functions, various rules)
        -   Integration (definition, rules, core functions)
        -   Ordinary differential euqations
        -   Multivariate functions
        -   Taylor expansion
        -   Norms, triangle inequality
        -   Convolution
        -   Variational methods
        -   Maximum and minimum value problems
        -   Trigonometric functions
        -   Exponential function
    -   Linear algebra (Hanke script):
        -   Vector spaces
        -   Matrices (trace, orthogonal, diagonal)
        -   Linear, affine , projective transformations
        -   Eigenvalues
        -   Orthogonal group
        -   Linear equation systems
    -   Numerical analysis & optimization (Dahmen book):
        -   Stability
        -   LR deocmposition
        -   QR decomposition
        -   SVD decomposition
        -   Eigenvalue decomposition
        -   Least squares
        -   Gradient descent (convergence, convex and non-convex)
        -   Newton-method
    -   Statistics:
        -   Axioms of probability
        -   Random variables
        -   Discrete distributions
        -   Expected value
        -   Variance
        -   Moments
        -   Unbiased estimators (Bernoulli, Binomial)
        -   Continuous distirbutions (Gaussian, Exponential, Dirac, Poisson, t-Student)
        -   Maximum likelihood
        -   hypothesis testing and confidence intervals
    -   Logic (script):
        -   Propositional logic
        -   First-order logic
    -   Algorithms & data structures (slides + Cormen book):
        -   Arrays and linked lists, stacks, queues
        -   Hash tables
        -   Sorting (mergesort, quicksort, lower bound, radix sort)
        -   Priority queues
        -   Graphs (adjacency lists, arrays, matrices)
        -   Breadth-first
        -   Depths-first
        -   DAGs
        -   Distraer
        -   Kruskal
        -   Linear programming
        -   Dynamic programming
        -   Sink-source problems/maximum flow
        -   Big-O (definition, theorems)
        -   Worst-case analysis
        -   Average-case analysis
    -   Complexity (?):
        -   Computability (definition)
        -   Halting problem
        -   Complexity class (definition, theorems)
        -   P
        -   NP
        -   SPACE
        -   NSPACE
        -   Relationships
    -   Software Engineering (slides SWE + project management):
        -   Software processes (waterfall model)
        -   Agile development and tools (Scrum, Kanban, pair programming, extreme programming)
        -   Requirements
        -   System design
        -   Testing (coverage, unit testing, test first)
        -   Patterns (?)
        -   Project management
    -   Machine learning (Bishop book + Sutton book + Leibe slides):
        -   Curse of dimensionality (distances, norms, probabilities in high dimension)
        -   Decision theory
        -   Naive Bayes
        -   Nearest neighbor
        -   Kernel density estimation
        -   Regularized least squares
        -   Bayesian linear regression
        -   Least squares classification
        -   Fisher's discriminant
        -   Logistic regression
        -   Neural networks
            -   Backpropagation
            -   Universal approximators
        -   SVMs
        -   Gaussian processes
        -   Graphical models (conditional independence, MRFs, sum-product and max-sum)
        -   K-means
        -   DBSCAN
        -   Mean shift
        -   PCA
        -   PPCA
        -   Monte Carlo
        -   Markov Chain Monte Carlo
        -   Gibbs Sampling
        -   Boosting
        -   Decision trees
        -   Random forests
        -   PAC learning
        -   Reinforcement learning (?)

Additional topics to brush up on:

-   Interpretability (review paper and tutorial)
-   Fairness (tutorial paper)
-   Backdooring (regular papers), membership inference (review or tutorial), privacy (differentiable privacy, federated learning tutorial or review)
-   Transformers (tutorial)
-   3D Vision (3D Geometry, Nerf, etc.)
-   Graph Neural Networks`,
    views: 0,
  },
  {
    id: 2,
    type: "PERSONAL",
    title: "AI Mathematics - The roadmap to kill it all.",
    date: "14/12/24",
    topic: "Artificial Intelligence",
    text: `## Arcticles and sources
- https://davidstutz.de/how-i-prepared-for-deepmind-and-google-ai-research-internship-interviews-in-2019/
- freecodecamp
- coursera

## Python
[Jupyter notebook](https://nextcloud.mpi-klsb.mpg.de/index.php/s/NN6CYwm5MxSFNTQ)

## Algebra
-   [Exponents](http://www.mclph.umn.edu/mathrefresh/exponents.html)
-   [Radicals](https://tutorial.math.lamar.edu/classes/alg/Radicals.aspx)
-   [Factorials](https://www.youtube.com/watch?v=pGg40oiQsUk&feature=youtu.be)
-   [Summations](https://www.youtube.com/watch?v=LDfaYXXAcHY&feature=youtu.be)
-   [Scientific Notations](https://www.khanacademy.org/math/pre-algebra/pre-algebra-exponents-radicals)

## Linear Algebra
-   [**Scalars**](http://www.sciencebits.com/vector_algebra) — a single number (can be real or natural).
-   [**Vectors**](http://www.sciencebits.com/vector_algebra) — a list of numbers, arranged in order. Consider them as points in space with each element representing the coordinate along an axis.
-   [**Matrices**](https://www.mathsisfun.com/algebra/matrix-introduction.html) — a 2-D array of numbers where each number is identified by 2 indices.
-   [**Tensors**](https://mathworld.wolfram.com/Tensor.html)  — an N-D array (N>2) of numbers, arranged on a regular grid with N-axes. Important in Machine Learning, Deep Learning and  [Computer Vision](https://github.com/jasmcaus/caer).
-   [**Eigenvectors & Eigenvalues**](https://www.mathsisfun.com/algebra/eigenvalue.html) — special vectors and their corresponding scalar quantity. Understand the significance and how to find them.
-   [**Singular Value Decomposition**](https://web.mit.edu/be.400/www/SVD/Singular_Value_Decomposition.htm)  — factorization of a matrix into 3 matrices. Understand the properties and applications.
-   [**Principal Component Analysis (PCA)**](https://royalsocietypublishing.org/doi/10.1098/rsta.2015.0202) — understand the significance, properties, and applications.

## Calculus
-   [**Derivatives**](https://www.mathsisfun.com/calculus/derivatives-introduction.html) — rules (addition, product, chain rule, and so on), hyperbolic derivatives (tanh, cosh, and so on) and partial derivatives.
-   [**Vector/Matrix Calculus**](http://www.personal.rdg.ac.uk/~sis01xh/teaching/CY4C9/ANN3.pdf) — different derivative operators (Gradient, Jacobian, Hessian and Laplacian)
-   [**Gradient Algorithms**](https://towardsdatascience.com/gradient-descent-algorithm-and-its-variants-10f652806a3) _**_ — local/global maxima and minima, saddle points, convex functions, batches and mini-batches, stochastic gradient descent, and performance comparison.

## Statistics & Probability
-   [**Basic Statistics**](https://www.dummies.com/education/math/statistics/statistics-for-dummies-cheat-sheet/) — Mean, median, mode, variance, covariance, and so on.
-   [**Basic rules in probability**](http://www.milefoot.com/math/stat/prob-rules.htm) — events (dependent and independent), sample spaces, conditional probability.
-   [**Random variables**](https://www.khanacademy.org/math/statistics-probability/random-variables-stats-library)— continuous and discrete, expectation, variance, distributions (joint and conditional).
-   **[Bayes’ Theorem](https://www.freecodecamp.org/news/bayes-rule-explained/)** — calculates validity of beliefs. Bayesian software helps machines recognize patterns and make decisions.
-   [**Maximum Likelihood Estimation (MLE)**](https://towardsdatascience.com/probability-concepts-explained-maximum-likelihood-estimation-c7b4342fdbb1) — parameter estimation. Requires knowledge of fundamental probability concepts (joint probability and independence of events).
-   [**Common Distributions**](https://www.stat.tamu.edu/~twehrly/611/distab.pdf) — binomial, poisson, bernoulli, gaussian, exponential.

## Information Theory
-   [**Entropy**](https://mathoverflow.net/questions/146463/what-is-entropy-really)  — also called Shannon Entropy. Used to measure the uncertainty in an experiment.
-   [**Cross-Entropy**](https://machinelearningmastery.com/cross-entropy-for-machine-learning)  — compares two probability distributions and tells us how similar they are.
-   [**Kullback Leibler Divergence**](https://www.countbayesie.com/blog/2017/5/9/kullback-leibler-divergence-explained)  — another measure of how similar two probability distributions are.
-   [**Viterbi Algorithm**](https://www.cis.upenn.edu/~cis262/notes/Example-Viterbi-DNA.pdf) — widely used in Natural Language Processing (NLP) and Speech.
-   [**Encoder-Decoder**](https://hackernoon.com/information-theory-of-neural-networks-c96a0f0a8d9) — used in Machine Translation RNNs and other models.

## Coursera Math Course
https://www.coursera.org/specializations/mathematics-for-machine-learning-and-data-science

## Pattern Recognization and machine learning book
https://www.microsoft.com/en-us/research/uploads/prod/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf

## Computer Vision and advance math notes pdf
https://www.vision.rwth-aachen.de/media/course/SS/2015/machine-learning/ml15-part18-repetition.pdf

## Cryptography and maths book
https://algebra.mathematik.uni-siegen.de/barakat/Lehre/WS10/Cryptography/lecture_notes/Cryptography.pdf

## NPTEL (CS, if you search for AI on their channel you can get it)
The best NPTEL Lectures I could find (will cover your whole CS degree) 
1. Digital Logic by Prof. S. Srinivasan, IITM 
2. COA by IITKgp 
3. DSA by Prof. Naveen Garg, IITD 
4. Algo Design by Prof. Abhiram Ranade, IITB 
5. TOC by Prof. Somenath Biswas, IITK 
6. Compilers by Prof. Sanjeev K Aggarwal, IITK 
7. OS by Prof. Sourav Bansal, IITD 
8. DBMS by Prof. PP Chakraborti, IITKgp 
9. Computer Networks by Prof. S.Ghosh, IITKgp
  
Links 
1. [https://youtube.com/playlist?list=PL803563859BF7ED8C](https://t.co/Xzb2CuZrA9)
2. [https://youtube.com/playlist?list=PL-8LShlBMIjUuI9beQJHZUF14we25NToB](https://t.co/ezwzj6sc77) 
3. [https://youtube.com/playlist?list=PLBF3763AF2E1C572F](https://t.co/IL1hNKC2p2)
4. [https://youtube.com/playlist?list=PL7DC83C6B3312DF1E](https://t.co/Y7Nb65q2lB)
5. [https://youtube.com/playlist?list=PLbMVogVj5nJSd25WnSU144ZyGmsqjuKr3](https://t.co/os8IzMq0uI)
6. [https://youtube.com/playlist?list=PLbMVogVj5nJTmKzaSlCpGgi7qxgcRRs8h](https://t.co/BliEWvegvc)
7. [https://youtube.com/playlist?list=PLsylUObW5M3CAGT6OdubyH6FztKfJCcFB](https://t.co/BoGOx5ehHT)
8. [https://youtube.com/playlist?list=PLyvBGMFYV3auVdxQ1-88ivNFpmUEy-U3M](https://t.co/MRzJBMz8Zt) 
9. [https://youtube.com/playlist?list=PL32DBC269EF768F74](https://t.co/bgq8ejrN77) 

A* Algorithm - https://www.youtube.com/watch?v=yMcZvZayJUA
AI - https://www.youtube.com/@iit/search?query=artificial

## list of topics to study:

-   Technical interviews:
    -   Python:
        -   data types
        -   memory management & garbage collection
        -   functions (by value and by reference, default values, kwargs)
        -   local and global functions
        -   return values
        -   global and local variables
        -   lambda expressions
        -   argument lists
        -   for, foreach, while, if else, inline if else
        -   generators and yield
        -   class definitions
        -   private and public attributes/functions
        -   static variables
        -   self object
        -   inheritance (overwriting)
        -   constructors, destructors (definition, order)
        -   magic functions
        -   classes in classes
        -   importing mechanisms
        -   error handling
        -   built-in data structures
        -   built-in functions
    -   Discrete (Hanke script):
        -   Permutations
        -   Combinatorics
        -   Graphs
        -   Connected components
    -   Calculus (AFI Script):
        -   Continuity (definition, theorems)
        -   Differentiation (definition, core functions, various rules)
        -   Integration (definition, rules, core functions)
        -   Ordinary differential euqations
        -   Multivariate functions
        -   Taylor expansion
        -   Norms, triangle inequality
        -   Convolution
        -   Variational methods
        -   Maximum and minimum value problems
        -   Trigonometric functions
        -   Exponential function
    -   Linear algebra (Hanke script):
        -   Vector spaces
        -   Matrices (trace, orthogonal, diagonal)
        -   Linear, affine , projective transformations
        -   Eigenvalues
        -   Orthogonal group
        -   Linear equation systems
    -   Numerical analysis & optimization (Dahmen book):
        -   Stability
        -   LR deocmposition
        -   QR decomposition
        -   SVD decomposition
        -   Eigenvalue decomposition
        -   Least squares
        -   Gradient descent (convergence, convex and non-convex)
        -   Newton-method
    -   Statistics:
        -   Axioms of probability
        -   Random variables
        -   Discrete distributions
        -   Expected value
        -   Variance
        -   Moments
        -   Unbiased estimators (Bernoulli, Binomial)
        -   Continuous distirbutions (Gaussian, Exponential, Dirac, Poisson, t-Student)
        -   Maximum likelihood
        -   hypothesis testing and confidence intervals
    -   Logic (script):
        -   Propositional logic
        -   First-order logic
    -   Algorithms & data structures (slides + Cormen book):
        -   Arrays and linked lists, stacks, queues
        -   Hash tables
        -   Sorting (mergesort, quicksort, lower bound, radix sort)
        -   Priority queues
        -   Graphs (adjacency lists, arrays, matrices)
        -   Breadth-first
        -   Depths-first
        -   DAGs
        -   Distraer
        -   Kruskal
        -   Linear programming
        -   Dynamic programming
        -   Sink-source problems/maximum flow
        -   Big-O (definition, theorems)
        -   Worst-case analysis
        -   Average-case analysis
    -   Complexity (?):
        -   Computability (definition)
        -   Halting problem
        -   Complexity class (definition, theorems)
        -   P
        -   NP
        -   SPACE
        -   NSPACE
        -   Relationships
    -   Software Engineering (slides SWE + project management):
        -   Software processes (waterfall model)
        -   Agile development and tools (Scrum, Kanban, pair programming, extreme programming)
        -   Requirements
        -   System design
        -   Testing (coverage, unit testing, test first)
        -   Patterns (?)
        -   Project management
    -   Machine learning (Bishop book + Sutton book + Leibe slides):
        -   Curse of dimensionality (distances, norms, probabilities in high dimension)
        -   Decision theory
        -   Naive Bayes
        -   Nearest neighbor
        -   Kernel density estimation
        -   Regularized least squares
        -   Bayesian linear regression
        -   Least squares classification
        -   Fisher's discriminant
        -   Logistic regression
        -   Neural networks
            -   Backpropagation
            -   Universal approximators
        -   SVMs
        -   Gaussian processes
        -   Graphical models (conditional independence, MRFs, sum-product and max-sum)
        -   K-means
        -   DBSCAN
        -   Mean shift
        -   PCA
        -   PPCA
        -   Monte Carlo
        -   Markov Chain Monte Carlo
        -   Gibbs Sampling
        -   Boosting
        -   Decision trees
        -   Random forests
        -   PAC learning
        -   Reinforcement learning (?)

Additional topics to brush up on:

-   Interpretability (review paper and tutorial)
-   Fairness (tutorial paper)
-   Backdooring (regular papers), membership inference (review or tutorial), privacy (differentiable privacy, federated learning tutorial or review)
-   Transformers (tutorial)
-   3D Vision (3D Geometry, Nerf, etc.)
-   Graph Neural Networks`,
    views: 0,
  },
  // Add more blog objects as needed
];
