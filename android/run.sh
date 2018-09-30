#!/bin/bash

./gradlew ${1:-installDevMinSdkDevKernelDebug} --stacktrace && adb shell am start -n com.twibssdo.twibs/host.exp.exponent.MainActivity
