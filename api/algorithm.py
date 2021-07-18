def findIndex(string: str):
    arr: list[int] = []
    strList = string.split(',')

    if len(strList) == 1 or string == '':
        return 'Wrong data!'

    # This code is just to convert the numbers string in a list of integers
    for i in range(len(strList)):
        arr.append(int(strList[i]))

    # Set the list length
    length = len(arr)

    stop = 0
    # Set leftIndex and rightIndex indexes to extract the values in both ways
    leftIndex = 0
    rightIndex = length - 1

    # Set to 0 the initial value of the comparative variables
    leftSum = 0
    rightSum = 0

    while stop < length:

        # Finish if the sums are equal and both sides are in the same index
        if rightSum == leftSum and leftIndex == rightIndex:
            return {"value": arr[leftIndex], "index": leftIndex}

        # Decrase rightIndex and sum the next value if left > right
        if leftSum > rightSum:
            rightSum += arr[rightIndex]
            rightIndex -= 1

        # Increase leftIndex and sum the next value if left < right
        elif leftSum < rightSum:
            leftSum += arr[leftIndex]
            leftIndex += 1

        # Increase index and sum the next value in right
        else:
            rightSum += arr[rightIndex]
            rightIndex -= 1

        stop += 1
