import Foundation

@objc public class FileSync: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
