// @ts-check

// Github의 레포지토리 관리 CLI를 만들어본다.
// 이슈, 풀 리퀘스트 등의 라벨 관리

require('dotenv').config()
const { GITHUB_ACCESS_TOKEN } = process.env

console.log('TOKEN:', GITHUB_ACCESS_TOKEN)
const { program } = require('commander')

program.version('0.0.0.1')

program
  .command('list-bugs')
  .description('List issues with bug label')
  .action(async () => {
    console.log('List bugs!')
  })

program
  .command('check-prs')
  .description('Check paull request status')
  .action(() => {
    console.log('Check PRs!')
  })

program.parseAsync()
