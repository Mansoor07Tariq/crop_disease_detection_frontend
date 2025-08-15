'use client'

import { useState } from 'react'

export default function Home() {
  const [image, setImage] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [result, setResult] = useState<null | {
    disease: string
    confidence: number
    severity: string
    treatment_steps: string[]
  }>(null)
  const [loading, setLoading] = useState(false)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImage(file)
      setPreviewUrl(URL.createObjectURL(file))
      setResult(null) // Reset old result
    }
  }

  const handleUpload = async () => {
    if (!image) return
    setLoading(true)

    const formData = new FormData()
    formData.append('image', image)

    try {
      const res = await fetch('http://localhost:8000/api/predict', {
        method: 'POST',
        body: formData,
      })

      if (!res.ok) throw new Error('Upload failed')
      const data = await res.json()
      setResult(data)
    } catch (err) {
      console.error('Error uploading image:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-br from-green-50 to-lime-100">
      <div className="w-full max-w-xl p-8 bg-white rounded-3xl shadow-2xl space-y-6">
        <h1 className="text-3xl font-bold text-center text-green-700">🌿 Plant Disease Detector</h1>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full text-sm border border-gray-300 p-2 rounded-lg file:bg-green-100 file:border-0 file:mr-4 file:px-4 file:py-2 file:rounded file:text-green-700 hover:file:bg-green-200"
        />

        {previewUrl && (
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">Preview:</p>
            <img src={previewUrl} alt="Preview" className="w-full max-h-64 object-contain rounded-lg" />
          </div>
        )}

        <button
          onClick={handleUpload}
          disabled={!image || loading}
          className="w-full py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 disabled:opacity-50 transition"
        >
          {loading ? 'Analyzing...' : 'Upload & Detect'}
        </button>

        {result && (
          <div className="p-4 border border-green-300 bg-green-50 rounded-lg mt-4 space-y-4">
            <div>
              <h2 className="font-semibold text-green-800">🌱 Disease Detected:</h2>
              <p className="text-gray-800">{result.disease.replace(/__/g, ' ').replace(/_/g, ' ')}</p>
              </div>

            <div>
              <h2 className="font-semibold text-green-800">📊 Confidence Level:</h2>
              <p className="text-gray-800">{(result.confidence * 100).toFixed(2)}%</p>
            </div>

            <div>
              <h2 className="font-semibold text-green-800">🧪 Severity:</h2>
              <p className="capitalize text-gray-800">{result.severity}</p>
            </div>

            <div>
              <h2 className="font-semibold text-green-800">💊 Recommended Treatment Steps:</h2>
              <ul className="list-disc list-inside text-gray-800 space-y-1">
                {result.treatment_steps.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}