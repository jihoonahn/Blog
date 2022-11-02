---
title: What is Swift
date: 2021-04-11 7:02
tags: Tutorial, Swift, Theory
description: Introducing what is Swift!
excerpt: iOS Basic
---

[Apple 공식 Swift](https://developer.apple.com/swift/)

스위프트는 iOS, macOS, watchOS, tvOS를 개발하기 위해 애플에서 제공하는 프로그래밍 언어 입니다.

### Swift의 특징

애플이 최초에 스위프트를 발표했을 때 스위프트 언어의 특성을 Safe, Modern, Powerful 이라고 발표했습니다. 그러나 오픈소스로 전환되면서 특징을 Safe, Fast, Expressive로 변경하여 발표했습니다.
더불어 애플은 ‘스위프트는 보다 직관적이고 배우기 쉬운 언어’라고 스위프트를 소개했습니다. 먼저 애플이 발표한 스위프트의 언어적 특성을 항목별로 정리해 보았습니다.


### Safe
스위프트는 안전한 프로그래밍을 지향합니다.

소프트웨어가 배포되기 전에, 즉 프로그래밍을 하는 중에 프로그래머가 저지를 수 있는 실수를 엄격한 문법을 통하여 미연에 방지하고자 노력했습니다.
때론 너무 강제적이라고 느껴질 수 있지만 문법적 제재는 실수를 줄이는 데 도움이 됩니다. 버그를 수정하거나 실수를 찾아내는 시간을 절약할 수 있습니다.

옵셔널이라는 기능을 비롯하여 guard 구문, 오류처리, 강력한 타입통제 등을 통해 스위프트는 안전한 프로그래밍을 구현하고 있습니다.


### Fast
스위프트는 C 언어를 기반으로 한 C, C++, Objective-C와 같은 프로그래밍 언어를 대체하려는 목적으로 만들어졌습니다.
아직은 부분적으로 미흡하지만 성능 또한 C 언어 수준을 목표로 개발되었습니다.
그래서 스위프트는 성능을 예측할 수 있고 일정한 수준으로 유지할 수 있는 부분에 초점을 맞춰 개발되었습니다.

실행속도의 최적화 뿐만 아니라 컴파일러의 지속된 개량을 통해 더 빠른 컴파일 성능을 구현해 나가고 있습니다.

### Expressive
스위프트는 여러 가지 프로그래밍 패러다임을 채용한 다중 패러다임 프로그래밍 언어입니다. 크게 보면 스위프트는 명령형 프로그래밍 패러다임, 객체지향 프로그래밍 패러다임, 함수형 프로그래밍 패러다임, 프로토콜 지향 프로그래밍 패러다임을 지향합니다. 정확하게는 명령형과 객체지향 프로그래밍 패러다임을 기반으로 한 함수형 프로그래밍 패러다임과 프로토콜 지향 프로그래밍 패러다임을 지향합니다. 결과적으로 스위프트에서 가장 강조하는 부분은 함수형 프로그래밍 패러다임과 프로토콜 지향 프로그래밍 패러다임입니다.
기존의 C 언어는 명령형 혹은 절자적 프로그래밍 패러다임을 채용했으며, C++, Java 등의 언어는 명령형 프로그래밍 패러다임과 객체지향 프로그래밍 패러다임을 동시에 채용한 다중 프로그래밍 패러다임 언어입니다.

최신 업데이트는 [5.7](https://github.com/apple/swift/releases/tag/swift-5.7-RELEASE)입니다.

## Xcode Start
Xcode는 iOS App 개발을 위한 IDE(통합 개발 환경, Integrated Development Environment) 입니다.
iOS 뿐만 아니라 macOS, iPadOS, tvOS, watchOS... 등등 다양판 플랫폼을 제공할 수 있다.

[AppStore](https://apps.apple.com/kr/app/xcode/id497799835?mt=12)

또는

명령어를 통해서 설치할 수 있습니다.

```bash
xcode-select --install
```
