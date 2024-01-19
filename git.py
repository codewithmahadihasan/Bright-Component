
import os
import random

import os
import random
from datetime import datetime, timedelta

start_date = datetime(2023, 1, 19)
end_date = datetime(2024, 1, 19)

for i in range(300):
    random_days = random.randint(0, (end_date - start_date).days)
    commit_date = (start_date + timedelta(days=random_days)).strftime('%Y-%m-%d %H:%M:%S')

    with open('test.txt', 'a') as file:
        file.write(commit_date + '\n')

    os.system('git add test.txt')
    os.system(f'git commit --date="{commit_date}" -m "Commit {i + 1}"')

# Assuming you're on the main branch
os.system('git push origin main')
