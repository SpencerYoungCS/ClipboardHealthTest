# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
First I set candidate to trivial partition key, because I felt that was the first base case (when no input is inserted),
Then I felt that the nested if statements could be hard to read, so I employed the return early pattern by checking for valid
data first, and returning early. I also noticed that the candidate length can only exceed 256 (the max partition_key_length)
if the candidate length was set to the trivial partition key AND trivial partition key length was greater than the max,
therefore I felt that this could be checked early on as well. Since trivial partition key wasn't an input parameter,
I had it return an error message instead (mostly for developmental side).
I then noticed that candidate could only not be a string if event partitionkey wasnt, but we can simply stringify it as we
assign it, so we can avoid having to check. then all that is left is if the partition key doesnt exist, we can 
run the last else statement where we simply assign the candidate (now renamed to candidateKey for clarity) to the new
crypto.createhash.
