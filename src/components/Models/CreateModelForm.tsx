import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button';

interface CreateModelFormProps {
  onClose: () => void;
}

const CreateModelForm: React.FC<CreateModelFormProps> = ({ onClose }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    type: 'nlp',
    description: '',
    dataset: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the model creation
    // For now, we'll just navigate to the models page
    navigate('/models');
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm text-gray-400 mb-1">Model Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="input-field"
          placeholder="Enter model name"
          required
        />
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-1">Model Type</label>
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="input-field"
          required
        >
          <option value="nlp">Natural Language Processing</option>
          <option value="cv">Computer Vision</option>
          <option value="tabular">Tabular Data</option>
          <option value="audio">Audio Processing</option>
        </select>
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-1">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="input-field min-h-[100px]"
          placeholder="Describe your model's purpose"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-1">Dataset</label>
        <select
          name="dataset"
          value={formData.dataset}
          onChange={handleChange}
          className="input-field"
          required
        >
          <option value="">Select a dataset</option>
          <option value="customer_feedback">Customer Feedback Data</option>
          <option value="product_images">Product Images</option>
        </select>
      </div>

      <div className="flex justify-end gap-3 pt-4">
        <Button variant="secondary" type="button" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit">
          Create Model
        </Button>
      </div>
    </form>
  );
};

export default CreateModelForm;