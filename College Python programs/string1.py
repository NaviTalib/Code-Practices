sentence = "Python is a powerful and versatile programming language."

# i. Determine and display the overall count of words in the given sentence.
word_count = len(sentence.split())

# ii. Generate a new string by reversing all the words in the original sentence and interspersing them with spaces.
reversed_words = " ".join(word[::-1] for word in sentence.split())

# iii. Identify and print the longest word present in the sentence.
longest_word = max(sentence.split(), key=len)

# Print the results
print("Overall count of words:", word_count)
print("Reversed words:", reversed_words)
print("Longest word:", longest_word)
